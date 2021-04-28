import React from "react";
import "./styles/button.css";

const Button = ({ type, children, bg, color, onClick }) => (
	<button
		className={
			"Button" + (bg ? ` bg-${bg}` : "") + (color ? ` color-${color}` : "")
		}
		type={type ? type : "button"}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
