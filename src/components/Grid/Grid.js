import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./grid.css";

const propTypes = {
  vertical: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  vertical: false,
  children: null,
  className: null
};

const Grid = ({ vertical, children, className, ...props }) =>
  <div className={cx(className, "grid", vertical && "vertical")} {...props}>
    {children}
  </div>;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;

// TODOS:
// spacing
// align
