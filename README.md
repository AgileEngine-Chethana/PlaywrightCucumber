About Project:
########################

This repository contains a test automation framework developed using Playwright and Cucumber. Playwright supports Cross-browser (Chromium, WebKit, and Firefox), Cross-platform (Test on Windows, Linux, and macOS, locally or on CI, headless or headed.)Cross-language( TypeScript, JavaScript, Python, .NET, Java) and Test Mobile Web (Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud). Cucumber is a tool for running automated tests written in plain language.


## Pre-Requisites
To get started, local installation of the following dependencies:

Node.js
NPM
visual studio
Once the dependencies are installed , clone this repository and install the project dependencies by running the following commands:

npm install
npx playwright install
npm install multiple-cucumber-html-reporter
npm install fs-extra


## Running the Tests

To run the tests, you can run the following command:

npm test

This will run all of the tests in the features directory.

To run a specific scenario/feature, use the below tag syntax

ex: npm test -- --tags '@Regression'


Reporting
The tests will generate a Cucumber HTML report in the reports directory. This report will include a summary of the test results, as well as screenshots of any failed tests.

Open the test-results/reports/index.html html file on any browser and it opens the report in the multiple-cucumber-html-reporter format

 #############################
  Frame work capabilities
  ##############################
1.  BDD Cucumber
2.  DDD 
3.  Page Object Model
4.  Parameterization
5.  Test data
7.  Parallelization - Run tests parallel 
8.  Custom Logging 
9.  Test Failure capture with screenshot
10. Test Failure capture with videos
11. added tracing zip files to track the complete execution 
12. Test Retry on failure
13. Custom Reporting 
14. Grouping and tagging

