import React from "react";
import "./styles/tableCell.css";

const TableCell = ({
  align,
  children
}) => /*#__PURE__*/React.createElement("td", {
  className: "TableCell",
  style: {
    textAlign: align
  }
}, children);

export default TableCell;