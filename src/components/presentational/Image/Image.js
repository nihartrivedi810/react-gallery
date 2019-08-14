import React from 'react';
import PropTypes from 'prop-types';
import BaseImage from 'react-bootstrap/Image';

const Image = ({ src, onClick, className }) => (
  <BaseImage
    src={src}
    onClick={onClick}
    className={className}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Image.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Image;
