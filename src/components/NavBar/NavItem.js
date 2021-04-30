import React from "react";
import "./styles/navItem.css";

const NavItem = ({ children }) => {
	return (
		<a className="NavItem" href="">
			{children}
		</a>
	);
};

export default NavItem;
