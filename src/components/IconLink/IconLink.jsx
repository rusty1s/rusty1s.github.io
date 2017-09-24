import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './iconLink.css';

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  containerElement: 'a',
  className: null,
};

const IconLink = ({ containerElement, icon, className, ...props }) => {
  const newProps = { ...props, className: cx(className, styles.main) };
  const Icon = <i className={`fa fa-${icon}`} />;
  return React.createElement(containerElement, newProps, Icon);
};

IconLink.propTypes = propTypes;
IconLink.defaultProps = defaultProps;

export default IconLink;
