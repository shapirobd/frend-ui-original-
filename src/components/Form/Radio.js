import React from "react";
import "./styles/radio.css";

const Radio = ({ label, name, value }) => {
	return (
		<>
			{/* {label && <label>{label}</label>}
			<input type="radio" name={name} value={value} /> */}
			<label className="radio-container">
				{label || ""}
				<input
					className="Radio"
					type="radio"
					name={name}
					value={value}
					// onChange={() => toggleIsChecked()}
				/>
				<span className="radio-mark"></span>
			</label>
		</>
	);
};

export default Radio;
