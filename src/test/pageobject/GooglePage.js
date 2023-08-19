const { expect } = require('@playwright/test');

class GooglePage {


    constructor(page, locatorData, testData) {
        this.page = page;
        this.locatorData = locatorData;
        this.testData = testData;
    }

    async GoTo() {
        await this.page.goto(this.testData.google.url);
    }

    async ValidateTitle(titleTxt) {
        console.log(await this.page.title(titleTxt));
        await expect(this.page).toHaveTitle(titleTxt);
    }

    async EnterText(text) {
        //console.log(this.locatorData.searchResultLoc)
        await this.page.waitForLoadState('networkidle')
        console.log("Inside SearchPage " + text)
        await this.page.locator(this.locatorData.google.searchTxtBoxLoc).fill(text)
        await expect(this.page.locator(this.locatorData.google.searchTxtBoxLoc)).toHaveValue(text);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle') //Waiting for page to load
        //await expect(this.page.locator(this.locatorData.searchResultLoc)).toBeVisible();
    }
    async LinkClick(AELink) {
        //this.page.pause();
        console.log(this.locatorData.google.searchResultLoc)
        console.log("LinkClick Loc " + this.locatorData.google.searchResultLoc)
        //this.page.pause();
        var searchResults = await this.page.$$(this.locatorData.google.searchResultLoc);
        console.log(searchResults.length)
        for await (const searchResult of searchResults) {
            var url = await searchResult.getAttribute('href');
            if (url == AELink) {
                await searchResult.click();
                console.log("Agile engine Link is clicked")
                break;
            }
        }
    }
    async AELinkClick() {
        //await this.page.getByRole('link', { name: 'AgileEngine | Home' }).click();
        await this.page.locator(this.locatorData.google.searchResultLoc).click();
    }

    async ObjectExists() {
        await this.page.isVisible(this.locatorData.google.searchResultLoc)
    }


}
module.exports = { GooglePage };