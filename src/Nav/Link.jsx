import React from 'react';
import PropTypes from 'prop-types';

import styles from './link.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  component: 'a',
};

const Link = ({ component, title, ...props }) => {
  let mergedProps = {
    ...props,
    className: styles.main,
  };

  if (component.propTypes && component.propTypes.activeClassName) {
    mergedProps = { ...mergedProps, activeClassName: styles.active };
  }

  return React.createElement(component, mergedProps, title);
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
