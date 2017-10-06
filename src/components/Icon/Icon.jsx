import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './icon.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  big: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
  big: false,
};

const Icon = ({ name, big, className, ...props }) => (
  <i
    className={cx(
      className,
      styles.main,
      big && styles.big,
      'fa',
      `fa-${name}`
    )}
    {...props}
  />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
