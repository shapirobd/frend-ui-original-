import React from "react";
import "./styles/gridItem.css";

const GridItem = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "GridItem"
  }, children);
};

export default GridItem;