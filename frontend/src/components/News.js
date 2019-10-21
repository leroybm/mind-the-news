import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'

const News = props => {
  return (
    <ul className="news">
      {props.news.map((news, index) => {
        return (
          <li key={index}>
            <NewsCard
              url={news.url}
              image={news.image}
              title={news.title}
              description={news.description}
            />
          </li>
        )
      })}
    </ul>
  );
};

News.propTypes = {
  news: PropTypes.array.isRequired
}

export default News;