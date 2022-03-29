import React from 'react';
import { PropTypes } from 'prop-types';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
import Styles from './styles';

const ImageLink = ({ src, alt, link }) => {
  return (
    <Styles>
      <Link to={link}>
        <Img
          src={src}
          alt={alt}
        />
      </Link>
    </Styles>
  );
}

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  link: PropTypes.string.isRequired
}

ImageLink.defaultProps = {
  alt: 'image'
}

export default ImageLink;