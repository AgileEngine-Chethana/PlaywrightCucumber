const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../pageobject/POManager')
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

When('Click on Get in Touch link', async function () {
    await this.homePage.ClickGetInTouch();
});

When('Enter details on Send Message page', async function () {
    await this.homePage.EnterCompData();
});