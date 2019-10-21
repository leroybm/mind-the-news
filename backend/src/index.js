const express = require('express')
const { scrapNews } = require('./helpers/scapper')

const app = express()
const port = 4000

app.use(express.json())

app.get('/news', async (req, res) => {
  try {
    const news = await scrapNews(req.body)
    res.send(news)
  } catch (error) {
    res
      .status(500)
      .send({
        error
      })
  }
})

app.listen(port, () => console.log(`Server open on ${port}!`))
