import React from "react";
import "./styles/cardImage.css";

const CardImage = ({ image, title }) => (
	<div className="CardImage" style={{ backgroundImage: `url(${image})` }}></div>
);

export default CardImage;
