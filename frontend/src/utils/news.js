/**
 * Fetches the news from the API
 *
 * @param {Object} source
 * @param {String} source.siteUrl
 * @param {String} source.parentSelector
 * @param {String} source.url
 * @param {String} source.title
 * @param {String} source.body
 * @param {String} source.image
 * @returns {Promise<Object>}
 */
const fetchNews = async ({
  siteUrl,
  parentSelector,
  url,
  title,
  body,
  image,
}) => {
  const data = JSON.stringify({
    siteUrl,
    parentSelector,
    selectors: [
      {
        url,
        title,
        body,
        image,
      },
    ],
  })

  const newsSource = await fetch('//localhost:4000/news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })

  return await newsSource.json()
}

export { fetchNews }