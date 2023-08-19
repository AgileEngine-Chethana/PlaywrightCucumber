const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../pageobject/POManager')
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

//const { context, page, selectedBrowser } = require('../support/hooks');


// Given('Open the Google home page', async function () {
//     this.googlePage = this.poManager.getGooglePage();
//     await this.googlePage.GoTo();
// });

Then('Validate the title {string} of the Google search page', async function (pageTitle) {
    await this.googlePage.ValidateTitle(pageTitle);
});

When('Enter the Search text {string} in the search text box and Validate the search text', { timeout: 800 * 1000 }, async function (searchText) {
    await this.googlePage.EnterText(searchText)
});

Then('Validate the Search result displayed', async function () {
    await this.googlePage.ObjectExists();
});

When('Search for AE Link {string} and Click on it', async function (AELink) {
    await this.googlePage.AELinkClick();
});

Then('Validate the title of the AE official web page {string}', { timeout: 200 * 1000 }, async function (AEtitle) {
    await this.googlePage.ValidateTitle(AEtitle);
});