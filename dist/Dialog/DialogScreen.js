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
  TransitionProps
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `DialogScreen${open ? "" : " hidden"}`,
    onClick: toggleOpen
  }, /*#__PURE__*/React.createElement("dialog", {
    open: true,
    className: "Dialog"
  }, /*#__PURE__*/React.createElement("p", null, children)));
};

export default DialogScreen;