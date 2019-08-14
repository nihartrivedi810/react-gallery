import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Loader = ({
  isLoading, variant, loadingText, small, animation,
}) => (
  isLoading ? (
    <>
      <Spinner animation={animation} role="status" variant={variant} size={small ? 'sm' : ''} />
      <span className="ml-2">{loadingText}</span>
    </>
  ) : null
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  loadingText: PropTypes.string,
  animation: PropTypes.oneOf(['border', 'grow']),
  small: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
  variant: 'primary',
  loadingText: 'Loading...',
  animation: 'border',
  small: false,
};

export default Loader;
