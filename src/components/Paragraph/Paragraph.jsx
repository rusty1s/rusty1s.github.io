import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './paragraph.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
};

const Paragraph = ({ children, className, ...props }) => (
  <p className={cx(className, styles.main)} {...props}>
    {children}
  </p>
);

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
