const { LaunchOptions, chromium, firefox, webkit } = require('@playwright/test');

const options = {
    headless: false,
}


class browsers {
    async invokeBrowser() {
        const browserType = process.env.BROWSER;
        switch (browserType) {
            case 'chrome':
                browser = await chromium.launch({ options });
                break;
            case 'firefox':
                browser = await firefox.launch({ options });
                break;
            case 'webkit':
                browser = await webkit.launch({ options });
                break;
            default:
                throw new Error(`Unsupported browser: ${browserType}`);

        }

    }
}
module.exports = { browsers };

