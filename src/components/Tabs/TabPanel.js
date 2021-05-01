import React from "react";
import "./styles/tabPanel.css";

const TabPanel = ({ bg, value, index, children }) => {
	return value === index ? (
		<div className={"TabPanel" + (bg ? ` bg-${bg}` : "")}>{children}</div>
	) : null;
};

export default TabPanel;
