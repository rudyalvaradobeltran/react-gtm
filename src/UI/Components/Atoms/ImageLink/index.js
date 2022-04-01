import React from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Img from 'react-cool-img';
import Styles from './styles';

const ImageLink = ({ src, alt, link, onClick }) => {
  const history = useHistory();
  const handleClick = () => {
    if (link) {
      onClick();
      history.push(link);
    }
  }

  return (
    <Styles>
      <Img
        className={!link ? 'image' : 'image-link'}
        src={src}
        onClick={() => handleClick()}
        alt={alt}
      />
    </Styles>
  );
}

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func
}

ImageLink.defaultProps = {
  alt: 'image',
  link: null,
  onClick: () => {}
}

export default ImageLink;