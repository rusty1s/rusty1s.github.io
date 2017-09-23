import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './button.css';

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  containerElement: 'button',
  children: null,
  className: null,
};

const Button = ({ containerElement, children, className, ...props }) => {
  const newProps = { ...props, className: cx(className, styles.main) };

  if (React.isValidElement(containerElement)) {
    return React.cloneElement(containerElement, newProps, children);
  }

  return React.createElement(containerElement, newProps, children);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
