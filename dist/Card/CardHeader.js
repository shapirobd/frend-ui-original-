import React from "react";
import Avatar from "../Avatar";
import "./styles/cardHeader.css";

const CardHeader = ({
  title,
  subtitle,
  avatarContent
}) => /*#__PURE__*/React.createElement("div", {
  className: "CardHeader"
}, avatarContent && /*#__PURE__*/React.createElement("div", {
  className: "CardHeader-avatar"
}, /*#__PURE__*/React.createElement(Avatar, null, avatarContent)), /*#__PURE__*/React.createElement("div", {
  className: "CardHeader-content"
}, title && /*#__PURE__*/React.createElement("p", {
  className: "CardHeader-title"
}, title), subtitle && /*#__PURE__*/React.createElement("p", {
  className: "CardHeader-subtitle"
}, subtitle)));

export default CardHeader;