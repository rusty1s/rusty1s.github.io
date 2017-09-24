import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './grid.css';

const propTypes = {
  vertical: PropTypes.bool,
  wrap: PropTypes.bool,
  center: PropTypes.bool,
  horizontalSpacing: PropTypes.string,
  verticalSpacing: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  vertical: false,
  wrap: false,
  center: false,
  horizontalSpacing: null,
  verticalSpacing: null,
  children: null,
  className: null,
};

const Grid = ({
  vertical,
  wrap,
  center,
  horizontalSpacing,
  verticalSpacing,
  children,
  className,
  ...props
}) => (
  <div
    className={cx(
      className,
      styles.main,
      vertical && styles.vertical,
      wrap && styles.wrap,
      center && styles.center
    )}
    style={{
      marginLeft: horizontalSpacing && `-${horizontalSpacing}`,
      marginTop: verticalSpacing && `-${verticalSpacing}`,
    }}
    {...props}
  >
    {Children.map(children, child =>
      React.cloneElement(child, {
        style: { marginLeft: horizontalSpacing, marginTop: verticalSpacing },
      })
    )}
  </div>
);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
