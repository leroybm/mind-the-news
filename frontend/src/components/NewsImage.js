import React from 'react';
import PropTypes from 'prop-types';

const NewsImage = props => {
  return (
    <figure>
      <img src={props.src} alt={props.alt || ''} />
    </figure>
  );
};

NewsImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default NewsImage;