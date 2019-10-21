import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News'

const sampleNews = [
  {
    url: 'leroybm',
    title: 'Leroy',
    image: 'https://placehold.it/300x300',
    description: 'test news'
  },
  {
    url: 'leroybm',
    title: 'Leroy',
    image: 'https://placehold.it/300x300',
    description: 'test news'
  },
  {
    url: 'leroybm',
    title: 'Leroy',
    image: 'https://placehold.it/300x300',
    description: 'test news'
  },
  {
    url: 'leroybm',
    title: 'Leroy',
    image: 'https://placehold.it/300x300',
    description: 'test news'
  }
]

class App extends Component {
  state = {
    news: sampleNews
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <News news={this.state.news} />
        </main>
        <Footer />
      </div>
    )
  };
}

export default App;
