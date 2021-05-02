import React from "react";
import "./avatar.css";

const Avatar = ({
  img,
  onClick,
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `Avatar${img ? " thumbnail" : ""}`,
    style: {
      backgroundImage: `url(${img})`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "#000000",
      fontSize: "150%"
    }
  }, children));
};

export default Avatar;