import React from "react";
import "./styles/radio.css";

const Radio = ({
  label,
  name,
  value
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "radio-container"
  }, label || "", /*#__PURE__*/React.createElement("input", {
    className: "Radio",
    type: "radio",
    name: name,
    value: value // onChange={() => toggleIsChecked()}

  }), /*#__PURE__*/React.createElement("span", {
    className: "radio-mark"
  })));
};

export default Radio;