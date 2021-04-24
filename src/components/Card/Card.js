import React from "react";
import "./styles/card.css";

const Card = ({ bg, children }) => (
	<div className={`Card ` + `bg-${bg}`}>{children}</div>
);

export default Card;
