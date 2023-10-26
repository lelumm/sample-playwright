# Overview
Hi!!, This scripts designed using `Playwright` framwork<br/>

## What is Playwright Test? framework for E2E test<br/>
### Whats include in Playwright test out of box<br/>
- TypeScript support out-of-the-box<br/>
- Parallel execution out-of-the-box<br/>
- Cross-browser, snapshots, fixtures, ...<br/>
- Time-travel debugging <br/>
- <a href="https://playwright.dev/docs/locators">Smart Locators `sudo` classes</a><br/>
- Open Source - Free<br/>

<br/>

## Install Node.js
Go to the following links and download and install the latest version of Node.js which contains NPM, if you have not yet had this installed, this is required for installing Framework.

https://nodejs.org/en/

<br/>

## Running NPM install
`npm install` This installs all required packages. After the install completed, you are ready to start. :)
`npx playwright install` This is to install browsers if not installed previously. 
<br/>
more : https://playwright.dev/docs/browsers 

<br/>

## Run Test
Prepair your `.env` file
got to `.env` file and enter your TVNZplus `USER_NAME` and `USER_PASS`, Then run test. <br/>
There are a couple of tests executed commands<br/>
By defult test run headless<br/>
headedless run eg: `npx playwright test`<br/>
headed run eg: `npx playwright test --headed`<br/>

## Run Report
After test excution completed. If test`fails` then HTML report will open automatically. If all test `pass` just run `npx playwright show-report` it will open in browser.

## About this test
This test will run in TVNZ plus web application. Test main purpuse to capture Advertisements running in one video session. But thi is a very basic test. This will only capture very first Advertisement and run for 10Secs. Then take a screenshort. Script design using `page object` module. 

Only two web browsers enabled & run parallel - `Webkit = Safari` , `firefox`
