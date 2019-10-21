const puppeteer = require('puppeteer');

async function getHeadlines() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.sciencenews.org/');

  // Wait for the results page to load and display the results.
  const resultsSelector = '.site-main [class^=\'featured-primary-three-column__title\'] a';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate((newsSelector) => {
    const anchors = Array.from(document.querySelectorAll(newsSelector));
    return anchors.map((anchor) => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);

  return links.join('\n');
}

module.exports = {
  getHeadlines
}