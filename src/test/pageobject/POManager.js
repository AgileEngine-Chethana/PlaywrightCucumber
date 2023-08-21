const { GooglePage } = require('./GooglePage');

class POManager {
    constructor(page, locatorData, testdata) {
        this.page = page;
        this.locatorData = locatorData;
        this.testdata = testdata
        this.googlepage = new GooglePage(this.page, this.locatorData, this.testdata)
        this.homepage = new HomePage(this.page, this.locatorData, this.testdata)
    }

    getGooglePage() {
        return this.googlepage;
    }
    getHomePage() {
        return this.homepage;
    }


}
module.exports = { POManager };
