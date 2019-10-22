import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import News from './components/News'
import Sources from './components/Sources'

// TODO: Docs
class App extends Component {
  state = {
    news: [],
    source: {
      siteUrl: 'https://www.sciencenews.org/topic/life',
      parentSelector: '.site-main',
      url: "h3[class^='post-item-river__title'] a",
      title: "h3[class^='post-item-river__title'] a",
      body: "p[class^='post-item-river__excerpt']",
      image: "a[class^='post-item-river__thumbnail'] img",
    },
  }

  updateNews = news => {
    this.setState({
      news,
    })
  }

  setSource = source => {
    this.setState({
      source: {
        ...this.state.source,
        ...source,
      },
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Sources
            updateNews={this.updateNews}
            setSource={this.setSource}
            source={this.state.source}
          />
          <News news={this.state.news} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
