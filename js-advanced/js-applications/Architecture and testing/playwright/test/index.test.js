const { chromium } = require('playwright-chromium');
const { expect } = require('chai')

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 200 });

    const page = await browser.newPage();

    await page.goto('https://softuni.bg');

    await page.screenshot({ path: 'softuni.screenshot.png' });

    await page.click('text=ПРЕПОДАВАТЕЛИ');

    let heading = await page.textContent('trainers-page-content-header-info-title')

    expect(heading.trim()).to.be.equal('ПРЕПОДАВАТЕЛИ')

    // await browser.close();
})();