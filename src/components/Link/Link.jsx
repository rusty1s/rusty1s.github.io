import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './link.css';

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  return React.createElement(containerElement, newProps, children);
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
