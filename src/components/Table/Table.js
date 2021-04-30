import React from "react";
import "./styles/table.css";

const Table = ({ bg, children }) => (
	<table className={"Table" + (bg ? ` bg-${bg}` : "")}>{children}</table>
);

export default Table;
