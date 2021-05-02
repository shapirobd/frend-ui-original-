import React from "react";
import "./styles/circularProgress.css";

const CircularProgress = ({ size, variant, color }) => {
	return (
		<svg
			height={size}
			width={size}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<circle
				cx={`${size / 2}`}
				cy={`${size / 2}`}
				r={`${size * 0.4}`}
				stroke={`${color}`}
				stroke-width="5"
				fill="none"
				stroke-dasharray="100"
				className="CircularProgress"
			/>
		</svg>
	);
};

export default CircularProgress;
