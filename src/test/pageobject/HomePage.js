const { expect } = require('@playwright/test');
const { logger } = require('../../helper/utils/logger');

class HomePage {

    constructor(page, locatorData, testData) {
        this.page = page;
        this.locatorData = locatorData;
        this.testData = testData;
    }

    async GoTo(titleTxt) {
        await this.page.goto(this.testData.homepage.url);
        await expect(this.page).toHaveTitle(titleTxt);
    }

    async ClickGetInTouch() {
        console.log("Chethana")
        await this.page.locator(this.locatorData.homepage.getInTouch).click();
        logger.info("Get in Touch Link is clicked")
        await expect(this.page.getByText('Want to build awesome')).toBeVisible();
        await this.page.waitForLoadState('networkidle')
    }

    async EnterCompData() {
        await this.page.waitForLoadState('networkidle')
        await this.page.locator(this.locatorData.homepage.fullName).fill(this.testData.homepage.fullName);
        await this.page.locator(this.locatorData.homepage.email).fill(this.testData.homepage.email);
        await this.page.locator(this.locatorData.homepage.company).fill(this.testData.homepage.company);
        logger.info("Name, Email, Company details are entered")
        await expect(this.page.locator(this.locatorData.homepage.fullName)).toHaveValue(this.testData.homepage.fullName);
        await expect(this.page.locator(this.locatorData.homepage.email)).toHaveValue(this.testData.homepage.email);
        await expect(this.page.locator(this.locatorData.homepage.company)).toHaveValue(this.testData.homepage.company);


        // await this.page.waitForLoadState('networkidle')
        // await this.page.locator("(//input[@placeholder='Full Name *'])[1]").fill("testing");
        // await this.page.locator("(//input[@type='email'])[1]").fill("123@testing.com");
        // await this.page.locator("(//input[@placeholder='Company *'])[1]").fill("AgileEngine");
        // logger.info("Name, Email, Company details are entered")
        // await expect(this.page.locator("(//input[@placeholder='Full Name *'])[1]")).toHaveValue("testing");
        // await expect(this.page.locator("(//input[@type='email'])[1]")).toHaveValue("123@testing.com");
        // await expect(this.page.locator("(//input[@placeholder='Company *'])[1]")).toHaveValue("AgileEngine");
    }
}
module.exports = { HomePage };