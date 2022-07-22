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

  //

  // await browser.close();
})();

// iscbijvlshvplsddcj@bvhrs.com
// verycoolpass

// #layers > div > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div > div.css-1dbjc4n.r-mk0yit.r-13qz1uu > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div.css-901oao.r-1awozwy.r-6koalj.r-37j5jr.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 > input
