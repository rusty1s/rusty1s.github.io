import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './grid.css';

const propTypes = {
  vertical: PropTypes.bool,
  wrap: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  vertical: false,
  wrap: false,
  center: false,
  children: null,
  className: null,
};

const Grid = ({ vertical, wrap, center, children, className, ...props }) => (
  <div
    className={cx(
      className,
      styles.main,
      vertical && styles.vertical,
      wrap && styles.wrap,
      center && styles.center
    )}
    {...props}
  >
    {children}
  </div>
);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
