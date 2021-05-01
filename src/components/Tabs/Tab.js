import React from "react";
import "./styles/tab.css";

const Tab = ({ number, label, selected = false, onClick }) => {
	return (
		<button className={"Tab" + (selected ? " selected" : "")} onClick={onClick}>
			{label}
		</button>
	);
};

export default Tab;
