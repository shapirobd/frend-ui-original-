import React from "react";
import "./typography.css";

const Typography = ({
  align,
  color,
  display,
  variant,
  children
}) => {
  const extraClasses = color ? ` ${color}` : "";

  if (variant === "h1") {
    return /*#__PURE__*/React.createElement("h1", {
      className: "Typography h1" + extraClasses
    }, children);
  } else if (variant === "h2") {
    return /*#__PURE__*/React.createElement("h2", {
      className: "Typography h2" + extraClasses
    }, children);
  } else if (variant === "h3") {
    return /*#__PURE__*/React.createElement("h3", {
      className: "Typography h3" + extraClasses
    }, children);
  } else if (variant === "h4") {
    return /*#__PURE__*/React.createElement("h4", {
      className: "Typography h4" + extraClasses
    }, children);
  } else if (variant === "h5") {
    return /*#__PURE__*/React.createElement("h5", {
      className: "Typography h5" + extraClasses
    }, children);
  } else if (variant === "h6") {
    return /*#__PURE__*/React.createElement("h6", {
      className: "Typography h6" + extraClasses
    }, children);
  } else if (variant === "body") {
    return /*#__PURE__*/React.createElement("p", {
      className: "Typography body" + extraClasses
    }, children);
  } else if (variant === "subtitle") {
    return /*#__PURE__*/React.createElement("h6", {
      className: "Typography subtitle" + extraClasses
    }, children);
  } else if (variant === "button") {
    return /*#__PURE__*/React.createElement("span", {
      className: "Typography button" + extraClasses
    }, children);
  } else if (variant === "caption") {
    return /*#__PURE__*/React.createElement("span", {
      className: "Typography caption" + extraClasses
    }, children);
  }
};

export default Typography;