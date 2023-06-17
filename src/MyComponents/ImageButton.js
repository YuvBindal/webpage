import React from 'react';
import "./Background.css";

const ImageButton = ({ imageSrc, altText, onClick }) => {
  return (
    <button class='iconStyle' onClick={onClick}>
      <img class='imageStyle' src={imageSrc} alt={altText} />
    </button>
  );
};

export default ImageButton;
