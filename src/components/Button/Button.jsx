import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./button.css";

const propTypes = {
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  containerElement: "button",
  children: null,
  className: null
};

const Button = ({ containerElement, children, className, ...props }) => {
  const buttonProps = Object.assign({}, props, {
    className: cx(className, "button")
  });

  if (React.isValidElement(containerElement)) {
    return React.cloneElement(containerElement, buttonProps, children);
  }

  return React.createElement(containerElement, buttonProps, children);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
