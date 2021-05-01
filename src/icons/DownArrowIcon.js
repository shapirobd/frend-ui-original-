import React from "react";
import "./icons.css";
import _DownArrowIcon from "./images/_DownArrowIcon.png";

const DownArrowIcon = ({ color, disabled }) => {
	return (
		<img
			src={_DownArrowIcon}
			className={"Icon" + (color ? ` ${color}` : "")}
			disabled={disabled}
		/>
	);
};

export default DownArrowIcon;
