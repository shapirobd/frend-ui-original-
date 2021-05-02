import React from "react";
import "./styles/table.css";

const Table = ({
  bg,
  children
}) => /*#__PURE__*/React.createElement("table", {
  className: "Table" + (bg ? ` bg-${bg}` : "")
}, children);

export default Table;