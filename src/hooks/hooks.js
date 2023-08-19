//const { BeforeAll, Before, AfterAll, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { LaunchOptions, chromium, firefox, webkit } = require('@playwright/test');
const { POManager } = require('../test/pageobject/POManager');
const playwright = require('@playwright/test');
const { Before, After, BeforeAll, AfterAll, Status, AfterStep } = require('@cucumber/cucumber')
const { getEnv } = require('../helper/env/env');
const { logger, options } = require('../helper/utils/logger');
const { createLogger } = require('winston');
const fs = require('fs-extra');
let browser;
let context;
let page;
let Logger;

BeforeAll(async function () {
    getEnv();
    logger.info(process.env.ENV);
    logger.info(process.env.BROWSER);
    logger.info(process.env.BROWSER_TYPE);

    const browserType = process.env.BROWSER;

    switch (browserType) {
        case 'chrome':
            global.browser = await chromium.launch({ headless: false });
            break;
        case 'firefox':
            global.browser = await firefox.launch({ headless: false });
            break;
        case 'webkit':
            global.AbortControllerbrowser = await webkit.launch({ headless: false });
            break;
        default:
            throw new Error(`Unsupported browser: ${browserType}`);

    }

})


Before(async function ({ pickle }) {
    global.context = await global.browser.newContext({
        ignoreHTTPSErrors: true,
        userAgent: 'AE Website',
        args: ['--start-maximized'],
        recordVideo: {
            dir: 'test-results/videos',
        },
    });
    await global.context.tracing.start({ screenshots: true, snapshots: true });
    global.page = await global.context.newPage();
    //this.poManager = new POManager(global.page);
    var msg = 'START SCENARIO: ' + pickle.name;
    logger.info(msg);
    logger.info(await global.page.evaluate(() => navigator.userAgent));
});


// AfterStep ( async function ({ pickle , result}) {

//     //     //const img = await this.poManager.screenshot({ path: `./test-results/screenshots/${pickle.name}`, type: "png" })
//     //     //await this.attach(img, "image/png")

// });

AfterStep(async function ({ pickleStep, result, pickle }) {
    logger.info('Step - ' + pickleStep.text + '- ' + result.status);
});


After(async function ({ result, pickle, testInfo }) {
    const timePart = Date.now();
    var relativeThemeUrl = './test-results/screenshots/' + pickle.name + '_' + timePart + '.png';
    const tracesDir = './test-results/traces';
    let img, videoPath;
    if (result.status === Status.FAILED) {
        img = await global.page.screenshot({ path: relativeThemeUrl });
        videoPath = await global.page.video().path();
        await global.context?.tracing.stop({
            path: `${tracesDir}/${pickle.name}_trace-${timePart}.zip`,
        });
    }
    await global.page.close();
    await global.context.close();
    if (result.status === Status.FAILED) {
        await this.attach(img, 'image/png');
        await this.attach(fs.readFileSync(videoPath), 'video/webm');

    }
    const msg = 'END SCENARIO: ' + pickle.name;
    logger.info(msg);
});

AfterAll(async function () {
    await global.browser.close();
})