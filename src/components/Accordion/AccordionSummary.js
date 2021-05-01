import React from "react";
import "./styles/accordionSummary.css";
import Button from "../Form/Button";

const AccordionSummary = ({
	toggler,
	collapsed = true,
	expandIcon,
	disabled,
	children,
}) => {
	if (disabled) {
		expandIcon = {
			...expandIcon,
			props: {
				...expandIcon.props,
				disabled: true,
			},
		};
	}

	return (
		<a
			href="#"
			className="AccordionSummary-wrapper"
			onClick={toggler}
			disabled={disabled}
		>
			<div
				className={
					"AccordionSummary" + (collapsed ? " collapsed" : " uncollapsed")
				}
			>
				{children}
				<div
					className={
						"ExpandIcon-wrapper" + (collapsed ? " collapsed" : " uncollapsed")
					}
				>
					{expandIcon}
				</div>
			</div>
		</a>
	);
};

export default AccordionSummary;
