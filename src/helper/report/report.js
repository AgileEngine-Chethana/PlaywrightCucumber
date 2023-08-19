const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Autoation Report",
    pageTitle: "Agile Engine Page test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Local test machine",
        platform: {
            name: "MAC",
            version: "13.2.1",
        },
    },
    customData: {
        title: "Test Execution info",
        data: [
            { label: "Project", value: "AE Launch" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Regression" },
        ],
    },
});