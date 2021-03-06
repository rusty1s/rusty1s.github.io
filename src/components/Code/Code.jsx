import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './code.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
};

const Code = ({ children, className, ...props }) => (
  <pre className={cx(className, styles.main)} {...props}>
    {children}
  </pre>
);

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;

export default Code;
