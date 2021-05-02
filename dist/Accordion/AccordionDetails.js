import React from "react";
import "./styles/accordionDetails.css";

const AccordionDetails = ({
  collapsed,
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "AccordionDetails" + (collapsed ? " collapsed" : "")
  }, children);
};

export default AccordionDetails;