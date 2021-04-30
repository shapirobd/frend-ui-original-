import React from "react";
import "./styles/navBar.css";

const NavBar = ({ bg, position, children }) => {
	return <nav className={"NavBar" + (bg ? ` bg-${bg}` : "")}>{children}</nav>;
};

export default NavBar;
