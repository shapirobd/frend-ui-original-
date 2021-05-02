import React from "react";
import "./styles/accordionSummary.css";
import Button from "../Form/Button";

const AccordionSummary = ({
  toggler,
  collapsed = true,
  expandIcon,
  disabled,
  children
}) => {
  if (disabled) {
    expandIcon = { ...expandIcon,
      props: { ...expandIcon.props,
        disabled: true
      }
    };
  }

  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "AccordionSummary-wrapper",
    onClick: toggler,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: "AccordionSummary" + (collapsed ? " collapsed" : " uncollapsed")
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "ExpandIcon-wrapper" + (collapsed ? " collapsed" : " uncollapsed")
  }, expandIcon)));
};

export default AccordionSummary;