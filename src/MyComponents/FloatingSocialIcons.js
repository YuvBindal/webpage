import React from "react";
import ImageButton from './ImageButton';
import "./styles/FloatingSocialIcons.css";

const FloatingSocialIcons = () => {
  return (
    <div className="floating-social-icons">
      <ImageButton 
        imageSrc={process.env.PUBLIC_URL + "/githublogo.png"}
        altText="GitHub"
        onClick={() => window.open("https://github.com/YuvBindal", "_blank")}
      />
      <ImageButton 
        imageSrc={process.env.PUBLIC_URL + "/devpostlogo.png"}
        altText="Devpost"
        onClick={() => window.open("https://devpost.com/yuv2bindal", "_blank")}
      />
      <ImageButton 
        imageSrc={process.env.PUBLIC_URL + "/youtubelogo.png"}
        altText="YouTube"
        onClick={() => window.open("https://www.youtube.com/@yuvbindal1226", "_blank")}
      />
      <ImageButton 
        imageSrc={process.env.PUBLIC_URL + "/instagramlogo.png"}
        altText="Instagram"
        onClick={() => window.open("https://www.instagram.com/yuvbindal/", "_blank")}
      />
      <ImageButton 
        imageSrc={process.env.PUBLIC_URL + "/linkedinlogo.png"}
        altText="LinkedIn"
        onClick={() => window.open("https://www.linkedin.com/in/yuvbindal/", "_blank")}
      />
    </div>
  );
};

export default FloatingSocialIcons; 