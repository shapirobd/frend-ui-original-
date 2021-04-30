import React from "react";
import "./styles/tableCell.css";

const TableCell = ({ align, children }) => (
	<td className="TableCell" style={{ textAlign: align }}>
		{children}
	</td>
);

export default TableCell;
