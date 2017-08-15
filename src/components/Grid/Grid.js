import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./grid.css";

const propTypes = {
  vertical: PropTypes.bool,
  wrap: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  vertical: false,
  wrap: false,
  children: null,
  className: null
};

const Grid = ({ vertical, wrap, children, className, ...props }) =>
  <div
    className={cx(className, "grid", vertical && "vertical", wrap && "wrap")}
    {...props}
  >
    {children}
  </div>;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
