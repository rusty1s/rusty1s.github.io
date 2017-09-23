import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './link.css';

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  containerElement: 'a',
  children: null,
  className: null,
};

const Link = ({ containerElement, children, className, ...props }) => {
  const newProps = { ...props, className: cx(className, styles.main) };

  if (React.isValidElement(containerElement)) {
    return React.cloneElement(containerElement, newProps, children);
  }

  return React.createElement(containerElement, newProps, children);
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
