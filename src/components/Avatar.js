import React from "react";
import "./avatar.css";

const Avatar = ({ img, onClick, children }) => {
	return (
		<div
			className={`Avatar${img ? " thumbnail" : ""}`}
			style={{ backgroundImage: `url(${img})` }}
		>
			<p style={{ margin: 0, color: "#000000", fontSize: "150%" }}>
				{children}
			</p>
		</div>
	);
};

export default Avatar;
