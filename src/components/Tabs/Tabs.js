import React from "react";
import "./styles/tabs.css";

const Tabs = ({ onChange, value, children }) => {
	children = children.map((child) => {
		return {
			...child,
			props: {
				...child.props,
				selected: child.props.number === value ? true : false,
				onClick: (evt) => {
					evt.preventDefault();
					onChange(evt, child.props.number);
				},
			},
		};
	});

	return <div className="Tabs">{children}</div>;
};

export default Tabs;
