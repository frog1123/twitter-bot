import puppeteer from 'puppeteer';
import { logInButton, signInEmailInput, signInNextButton, signInPasswordInput } from './selectors.js';
(async () => {
    const browser = await puppeteer.launch({ defaultViewport: null, headless: false });
    const page = await browser.newPage();
    await page.goto('https://twitter.com/i/flow/login');
    await page.waitForSelector(signInEmailInput);
    await page.type(signInEmailInput, 'iscbijvlshvplsddcj@bvhrs.com');
    await page.waitForSelector(signInNextButton);
    await page.click(signInNextButton);
    await page.waitForSelector(signInPasswordInput);
    await page.type(signInPasswordInput, 'verycoolpass');
    await page.waitForSelector(logInButton);
    await page.click(logInButton);
})();
//# sourceMappingURL=index.js.map