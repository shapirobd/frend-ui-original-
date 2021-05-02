import React, { useState } from "react";
import useToggleState from "../../hooks/useToggleState";
import "./styles/checkbox.css";

const Checkbox = ({
  label,
  checked
}) => {
  const [isChecked, toggleIsChecked] = useToggleState(checked || false);
  console.log(isChecked);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "checkbox-container"
  }, label || "", /*#__PURE__*/React.createElement("input", {
    className: "Checkbox",
    type: "checkbox",
    checked: isChecked,
    onChange: () => toggleIsChecked()
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkmark"
  })));
};

export default Checkbox;