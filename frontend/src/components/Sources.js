import React, { Component } from 'react'

class Sources extends Component {
  fetchNews = async () => {
    const data = JSON.stringify({
      siteUrl: 'https://www.sciencenews.org/topic/life',
      parentSelector: '.site-main',
      selectors: [
        {
          url: "h3[class^='post-item-river__title'] a",
          title: "h3[class^='post-item-river__title'] a",
          body: "p[class^='post-item-river__excerpt']",
          image: "a[class^='post-item-river__thumbnail'] img",
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
    const response = await newsSource.json()
    this.props.updateNews(response)
  }

  render() {
    return <button onClick={this.fetchNews}>Load News</button>
  }
}

export default Sources
