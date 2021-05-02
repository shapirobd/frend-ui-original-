import React from "react";
import "./styles/tabPanel.css";

const TabPanel = ({
  bg,
  value,
  index,
  children
}) => {
  return value === index ? /*#__PURE__*/React.createElement("div", {
    className: "TabPanel" + (bg ? ` bg-${bg}` : "")
  }, children) : null;
};

export default TabPanel;