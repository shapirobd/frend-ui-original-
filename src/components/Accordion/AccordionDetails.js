import React from "react";
import "./styles/accordionDetails.css";

const AccordionDetails = ({ collapsed, children }) => {
	return (
		<div className={"AccordionDetails" + (collapsed ? " collapsed" : "")}>
			{children}
		</div>
	);
};

export default AccordionDetails;
