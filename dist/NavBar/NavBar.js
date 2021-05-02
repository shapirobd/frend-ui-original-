import React from "react";
import "./styles/navBar.css";

const NavBar = ({
  bg,
  position,
  children
}) => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "NavBar" + (bg ? ` bg-${bg}` : "")
  }, children);
};

export default NavBar;