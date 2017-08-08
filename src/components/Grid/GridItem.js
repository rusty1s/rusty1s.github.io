import React from "react";
import cx from "classnames";

import "./grid-item.css";

const GridItem = ({ children, className, ...props }) =>
  <div className={cx(className, "grid-item")} {...props}>
    {children}
  </div>;

export default GridItem;
