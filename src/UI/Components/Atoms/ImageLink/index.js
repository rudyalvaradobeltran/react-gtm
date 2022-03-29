import React from 'react';
import { PropTypes } from 'prop-types';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
import Styles from './styles';

const ImageLink = ({ src, alt, link }) => {
  return (
    <Styles>
      {link ? (
        <Link to={link}>
          <Img
            src={src}
            alt={alt}
          />
        </Link>
      ) : (
        <Img
          src={src}
          alt={alt}
        />
      )}
    </Styles>
  );
}

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  link: PropTypes.string
}

ImageLink.defaultProps = {
  alt: 'image',
  link: null
}

export default ImageLink;