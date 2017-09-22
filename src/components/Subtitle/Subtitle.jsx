import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './subtitle.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
};

const Subtitle = ({ children, className, ...props }) => (
  <h2 className={cx(className, styles.main)} {...props}>
    {children}
  </h2>
);

Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;

export default Subtitle;
