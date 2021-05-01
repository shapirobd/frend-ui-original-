import React, { useState, useEffect, DOMElement } from "react";
import "./styles/accordion.css";
import * as $ from "jquery";
// import Button from "../Form/Button";

const Accordion = ({ bg, disabled, children }) => {
	// const [hidden, setHidden] = useState(true);
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapsed = () => setCollapsed(!collapsed);
	// const toggleHidden = () => setHidden(!hidden);

	const determineChildState = (child) => {
		// if (child.type.name.includes("AccordionSummary")) {
		return { name: "collapsed", value: collapsed, toggler: toggleCollapsed };
		// } else if (child.type.name.includes("AccordionDetails")) {
		// 	return { name: "hidden", value: hidden, toggler: toggleHidden };
		// }
	};

	// const accordionSummary = disabled
	// 	? children
	// 	: children.filter((child) =>
	// 			child.type.name.includes("AccordionSummary")
	// 	  )[0];
	// const accordionDetails = disabled
	// 	? null
	// 	: children.filter((child) =>
	// 			child.type.name.includes("AccordionDetails")
	// 	  )[0];

	// $(".AccordionSummary").on("click", () => {
	// 	console.log($(this).siblings(".AccordionDetails"));
	// 	$(this).siblings(".AccordionDetails").slideDown();
	// });

	if (!disabled) {
		children = children.map((child) => {
			const { name, value, toggler } = determineChildState(child);
			return {
				...child,
				props: {
					...child.props,
					[name]: value,
					toggler,
				},
			};
		});
	} else {
		if (children.type.name.includes("AccordionSummary")) {
			children = {
				...children,
				props: {
					...children.props,
					disabled: true,
				},
			};
		}
	}

	console.log(children);

	// useEffect(() => toggleHidden(), [collapsed]);

	return (
		<div
			className={
				"Accordion" + (bg ? ` bg-${bg}` : "") + (disabled ? " disabled" : "")
			}
		>
			{children}
		</div>
	);
};

export default Accordion;
