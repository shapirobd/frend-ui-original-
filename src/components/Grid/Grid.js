import React, { useState, useEffect } from "react";
import "./styles/grid.css";
import useWindowDimensions from "../../hooks/getWindowDimensions";

const breakpoints = {
	xs: 0,
	sm: 600,
	md: 960,
	lg: 1280,
	xl: 1920,
};

const getCurrBreakpoint = (windowWidth, breakpoints, breakpointProps) => {
	if (windowWidth >= breakpoints.xl && breakpointProps["xl"]) {
		return "xl";
	} else if (windowWidth >= breakpoints.lg && breakpointProps["lg"]) {
		return "lg";
	} else if (windowWidth >= breakpoints.md && breakpointProps["md"]) {
		return "md";
	} else if (windowWidth >= breakpoints.sm && breakpointProps["sm"]) {
		return "sm";
	} else if (windowWidth >= breakpoints.xs && breakpointProps["xs"]) {
		return "xs";
	}
};

const getLargerBreakpoint = (currBreakpoint) => {
	if (currBreakpoint === "xl") {
		return null;
	} else if (currBreakpoint === "lg") {
		return "xl";
	} else if (currBreakpoint === "md") {
		return "lg";
	} else if (currBreakpoint === "sm") {
		return "md";
	} else if (currBreakpoint === "xs") {
		return "sm";
	}
};

const getSmallerBreakpoint = (currBreakpoint) => {
	if (currBreakpoint === "xl") {
		return "lg";
	} else if (currBreakpoint === "lg") {
		return "md";
	} else if (currBreakpoint === "md") {
		return "sm";
	} else if (currBreakpoint === "sm") {
		return "xs";
	} else {
		return null;
	}
};

const Grid = ({ xs, sm, md, lg, xl, spacing, children, justifyContent }) => {
	const spacingInPixels =
		spacing && spacing <= 5 && spacing > 0 ? spacing * 5 : 0;
	const breakpointProps = {
		xs,
		sm,
		md,
		lg,
		xl,
	};

	const { windowWidth } = useWindowDimensions();
	const [currBreakpoint, setCurrBreakpoint] = useState(
		getCurrBreakpoint(windowWidth, breakpoints, breakpointProps)
	);
	console.log(currBreakpoint);
	const [largerBreakpoint, setLargerBreakpoint] = useState(
		getLargerBreakpoint(currBreakpoint)
	);
	const [smallerBreakpoint, setSmallerBreakpoint] = useState(
		getSmallerBreakpoint(currBreakpoint)
	);

	useEffect(() => {
		if (
			(windowWidth <= breakpoints[smallerBreakpoint] &&
				breakpointProps[smallerBreakpoint]) ||
			(windowWidth >= breakpoints[largerBreakpoint] &&
				breakpointProps[largerBreakpoint])
		) {
			setCurrBreakpoint(
				getCurrBreakpoint(windowWidth, breakpoints, breakpointProps)
			);
		}
	}, [windowWidth]);

	useEffect(() => {
		if (!breakpointProps[currBreakpoint]) {
			return;
		}
		setSmallerBreakpoint(currBreakpoint);
		setLargerBreakpoint(currBreakpoint);
	}, [currBreakpoint]);

	useEffect(() => {}, [largerBreakpoint]);

	return (
		<div
			className="Grid"
			style={{ justifyContent: justifyContent ? justifyContent : "flex-start" }}
		>
			{children.map((child) => (
				<div
					style={{
						width: `${
							windowWidth / breakpointProps[currBreakpoint] - spacingInPixels
						}px`,
						margin: `${spacingInPixels / 2}px`,
					}}
				>
					{child}
				</div>
			))}
		</div>
	);
};

export default Grid;
