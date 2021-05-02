import React from "react";
import "./styles/navItem.css";

const NavItem = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("a", {
    className: "NavItem",
    href: "#"
  }, children);
};

export default NavItem;