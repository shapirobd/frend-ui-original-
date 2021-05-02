import React, { useState } from "react";
import "./styles/textInput.css";

const TextInput = ({
  defaultValue,
  type,
  name,
  placeholder,
  label
}) => {
  const [text, setText] = useState(defaultValue ? defaultValue : "");
  return /*#__PURE__*/React.createElement("div", null, label && name && /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type ? type : "text",
    placeholder: placeholder ? placeholder : "",
    value: text,
    className: "TextInput",
    onChange: evt => setText(evt.target.value),
    name: name
  }));
};

export default TextInput;