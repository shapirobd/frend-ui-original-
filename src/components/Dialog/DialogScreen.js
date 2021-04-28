import React from "react";
import "./styles/dialogScreen.css";

const DialogScreen = ({
	children,
	disableBackdropClick,
	disableEscapeKeyDown,
	fullScreen,
	fullWidth,
	maxWidth,
	onBackdropClick,
	onClose,
	onEnter,
	onEntered,
	onEntering,
	onEscapeKeyDown,
	onExit,
	onExited,
	onExiting,
	open,
	toggleOpen,
	transitionDuration,
	TransitionProps,
}) => {
	return (
		<div
			className={`DialogScreen${open ? "" : " hidden"}`}
			onClick={toggleOpen}
		>
			<dialog open className="Dialog">
				<p>{children}</p>
			</dialog>
		</div>
	);
};

export default DialogScreen;
