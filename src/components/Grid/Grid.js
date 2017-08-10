import React from "react";
import cx from "classnames";

import "./grid.css";

const Grid = ({ children, className, ...props }) =>
  <div className={cx(className, "grid")} {...props}>
    {children}
  </div>;

export default Grid;

// TODOS:
// spacing
// vertical horizontal
// align
