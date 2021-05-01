import React, { useState } from "react";
import useToggleState from "../../hooks/useToggleState";
import "./styles/checkbox.css";

const Checkbox = ({ label, checked }) => {
	const [isChecked, toggleIsChecked] = useToggleState(checked || false);
	console.log(isChecked);
	return (
		<>
			<label className="checkbox-container">
				{label || ""}
				<input
					className="Checkbox"
					type="checkbox"
					checked={isChecked}
					onChange={() => toggleIsChecked()}
				/>
				<span className="checkmark"></span>
			</label>
		</>
	);
};

export default Checkbox;
