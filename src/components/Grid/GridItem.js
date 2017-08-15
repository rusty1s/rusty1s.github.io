import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./grid-item.css";

const propTypes = {
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  grow: false,
  shrink: false,
  children: null,
  className: null
};

const GridItem = ({ grow, shrink, children, className, ...props }) =>
  <div
    className={cx(className, "grid-item", grow && "grow", shrink && "shrink")}
    {...props}
  >
    {children}
  </div>;

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export default GridItem;
