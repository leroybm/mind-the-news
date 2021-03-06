const express = require('express')
const cors = require('cors')
const { scrapNews } = require('./helpers/scrapper')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('pong'))

app.post('/news', async (req, res) => {
  try {
    if (!req.body) throw new Error('Empty Body')
    const news = await scrapNews(req.body)
    res.send(news)
  } catch (error) {
    console.log(error)
    res.status(500).send({
      error,
    })
  }
})

app.listen(port, () => console.log(`Server open on ${port}!`))
