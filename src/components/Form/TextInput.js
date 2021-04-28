import React, { useState } from "react";
import "./styles/textInput.css";

const TextInput = ({ defaultValue, type, name, placeholder, label }) => {
	const [text, setText] = useState(defaultValue ? defaultValue : "");

	return (
		<div>
			{label && name && <label htmlFor={name}>{label}</label>}
			<input
				type={type ? type : "text"}
				placeholder={placeholder ? placeholder : ""}
				value={text}
				className="TextInput"
				onChange={(evt) => setText(evt.target.value)}
				name={name}
			/>
		</div>
	);
};

export default TextInput;
