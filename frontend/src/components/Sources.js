import React, { Component } from 'react'
import nprogress from 'nprogress'
import EditSource from './EditSource'

// TODO: PropTypes
class Sources extends Component {
  state = {
    showEdit: false,
  }

  // TODO: Make this dinamic and move to an utils file
  fetchNews = async () => {
    nprogress.start()
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
    nprogress.set(0.8)
    const response = await newsSource.json()
    this.props.updateNews(response)
    nprogress.done()
  }

  render() {
    return (
      <div className="card">
        <p>Current source url: {this.props.source.siteUrl}</p>
        <button
          onClick={() => this.setState({ showEdit: !this.state.showEdit })}
        >
          Edit News Source
        </button>
        <button onClick={this.fetchNews}>Load News</button>
        {this.state.showEdit && (
          <EditSource
            setSource={this.props.setSource}
            source={this.props.source}
          />
        )}
      </div>
    )
  }
}

export default Sources
