import React from "react";
import Avatar from "../Avatar";

import "./styles/cardHeader.css";

const CardHeader = ({ title, subtitle, avatarContent }) => (
	<div className="CardHeader">
		{avatarContent && (
			<div className="CardHeader-avatar">
				<Avatar>{avatarContent}</Avatar>
			</div>
		)}
		<div className="CardHeader-content">
			{title && <p className="CardHeader-title">{title}</p>}
			{subtitle && <p className="CardHeader-subtitle">{subtitle}</p>}
		</div>
	</div>
);

export default CardHeader;
