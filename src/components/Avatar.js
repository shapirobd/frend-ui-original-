import React from "react";
import "./avatar.css";

const Avatar = ({ children }) => {
	return (
		<div className="Avatar">
			<p style={{ margin: 0, color: "#000000", fontSize: "150%" }}>
				{children}
			</p>
		</div>
	);
};

export default Avatar;
