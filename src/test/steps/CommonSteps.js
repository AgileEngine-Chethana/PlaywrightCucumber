const { Given } = require('@cucumber/cucumber');
var { setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../pageobject/POManager');
setDefaultTimeout(120 * 1000);
const { logger } = require('../../helper/utils/logger');

let locatorData;
let testData;
let env = process.env.ENV;

Given('Open the Google home page', async function () {

    console.log("Browser " + env);

    locatorData = JSON.parse(JSON.stringify(require("../pagelocators/locator.json")));
    testData = JSON.parse(JSON.stringify(require("../pagelocators/testdata.json")));

    this.poManager = new POManager(page, locatorData, testData);
    this.googlePage = this.poManager.getGooglePage();
    await this.googlePage.GoTo();
    logger.info("Google Page is loaded")
});