import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './navLink.css';

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  containerElement: Link,
  children: null,
  className: null,
};

const NavLink = ({ containerElement, children, className, ...props }) => {
  let newProps = { ...props, className: cx(className, styles.main) };

  if (
    containerElement.propTypes &&
    containerElement.propTypes.activeClassName
  ) {
    newProps = { ...newProps, activeClassName: styles.active };
  }

  return React.createElement(containerElement, newProps, children);
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
