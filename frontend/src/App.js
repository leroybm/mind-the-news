import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import News from './components/News'
import Sources from './components/Sources'

class App extends Component {
  state = {
    news: [],
  }

  updateNews = news => {
    this.setState({
      news,
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Sources updateNews={this.updateNews} />
          <News news={this.state.news} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
