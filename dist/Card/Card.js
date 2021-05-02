import React from "react";
import "./styles/card.css";

const Card = ({
  bg,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: `Card ` + `bg-${bg}`
}, children);

export default Card;