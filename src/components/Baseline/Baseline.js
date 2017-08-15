import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./baseline.css";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: null
};

const Baseline = ({ children, className, ...props }) =>
  <div className={cx(className, "baseline")} {...props}>
    {children}
  </div>;

Baseline.propTypes = propTypes;
Baseline.defaultProps = defaultProps;

export default Baseline;
