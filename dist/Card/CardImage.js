import React from "react";
import "./styles/cardImage.css";

const CardImage = ({
  image,
  title
}) => /*#__PURE__*/React.createElement("div", {
  className: "CardImage",
  style: {
    backgroundImage: `url(${image})`
  }
});

export default CardImage;