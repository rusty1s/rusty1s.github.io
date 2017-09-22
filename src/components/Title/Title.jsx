import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './title.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
};

const Title = ({ children, className, ...props }) => (
  <h1 className={cx(className, styles.main)} {...props}>
    {children}
  </h1>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
