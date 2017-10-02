import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './iconLink.css';

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

const IconLink = ({ containerElement, children, className, ...props }) => {
  const newProps = { ...props, className: cx(className, styles.main) };
  return React.createElement(containerElement, newProps, children);
};

IconLink.propTypes = propTypes;
IconLink.defaultProps = defaultProps;

export default IconLink;
