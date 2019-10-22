const puppeteer = require('puppeteer')

const TIMEOUT = 10 * 1000

/**
 * Acessor type for each HTML element
 */
const CONTENT_BY_NODE_TYPE = {
  url: 'href',
  title: 'innerText',
  body: 'innerText',
  image: 'src',
}

async function getPage(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  return page
}

// TODO Refactor
// TODO Multiple elements
async function scrapeElements(page, selectors, parent = '') {
  return selectors.map(async newsSelector => {
    const result = {}
    for (const [nodeType, selector] of Object.entries(newsSelector)) {
      if (selector) {
        try {
          await page.waitForSelector(`${parent} ${selector}`, {
            timeout: TIMEOUT,
          })
          result[nodeType] = await page.evaluate(
            ({ selector, acessor }) => {
              const element = document.querySelector(selector)
              return element && element[acessor]
            },
            { selector, acessor: CONTENT_BY_NODE_TYPE[nodeType] },
          )
        } catch (error) {
          console.error(error)
          return
        }
      }
    }
    return result
  })
}

async function scrapNews(options) {
  const page = await getPage(options.siteUrl)
  const scrappers = await scrapeElements(
    page,
    options.selectors,
    options.parentSelector,
  )
  const result = await Promise.all(scrappers)
  return result.filter(Boolean)
}

module.exports = {
  scrapNews,
}
