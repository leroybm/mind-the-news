import React from 'react'
import PropTypes from 'prop-types'
import NewsImage from './NewsImage'

const NewsCard = props => {
  return (
    <article className="card news-card">
      <a href={props.url} target="_blank" rel="noopener nofollow">
        <NewsImage src={props.image} />
        <div>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
      </a>
    </article>
  )
}

NewsCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
}

export default NewsCard
