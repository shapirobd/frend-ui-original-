import React from "react";
import "./styles/button.css";

const Button = ({
  icon,
  type,
  children,
  bg,
  color,
  onClick
}) => {
  const classString = (bg ? ` bg-${bg}` : "") + (color ? ` color-${color}` : "") + (icon ? " icon" : "");
  return /*#__PURE__*/React.createElement("button", {
    className: "Button" + classString,
    type: type ? type : "button",
    onClick: onClick
  }, children);
};

export default Button;