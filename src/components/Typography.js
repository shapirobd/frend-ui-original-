import React from "react";
import "./typography.css";

const Typography = ({ align, color, display, variant, children }) => {
	const extraClasses = color ? ` ${color}` : "";

	if (variant === "h1") {
		return <h1 className={"Typography h1" + extraClasses}>{children}</h1>;
	} else if (variant === "h2") {
		return <h2 className={"Typography h2" + extraClasses}>{children}</h2>;
	} else if (variant === "h3") {
		return <h3 className={"Typography h3" + extraClasses}>{children}</h3>;
	} else if (variant === "h4") {
		return <h4 className={"Typography h4" + extraClasses}>{children}</h4>;
	} else if (variant === "h5") {
		return <h5 className={"Typography h5" + extraClasses}>{children}</h5>;
	} else if (variant === "h6") {
		return <h6 className={"Typography h6" + extraClasses}>{children}</h6>;
	} else if (variant === "body") {
		return <p className={"Typography body" + extraClasses}>{children}</p>;
	} else if (variant === "subtitle") {
		return <h6 className={"Typography subtitle" + extraClasses}>{children}</h6>;
	} else if (variant === "button") {
		return (
			<span className={"Typography button" + extraClasses}>{children}</span>
		);
	} else if (variant === "caption") {
		return (
			<span className={"Typography caption" + extraClasses}>{children}</span>
		);
	}
};

export default Typography;
