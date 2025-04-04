import React from "react";
import ImageButton from "./ImageButton";
import "./styles/SocialLinks.css";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      imageSrc: "/githublogo.png",
      url: "https://github.com/YuvBindal"
    },
    {
      name: "Devpost",
      imageSrc: "/devpostlogo.png",
      url: "https://devpost.com/yuv2bindal"
    },
    {
      name: "YouTube",
      imageSrc: "/youtubelogo.png",
      url: "https://www.youtube.com/@yuvbindal1226"
    },
    {
      name: "Instagram",
      imageSrc: "/instagramlogo.png",
      url: "https://www.instagram.com/yuvbindal/"
    },
    {
      name: "LinkedIn",
      imageSrc: "/linkedinlogo.png",
      url: "https://www.linkedin.com/in/yuvbindal/"
    }
  ];

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="mediaStyle">
      {socialLinks.map((social, index) => (
        <ImageButton
          key={index}
          imageSrc={process.env.PUBLIC_URL + social.imageSrc}
          altText={`${social.name} Logo`}
          onClick={() => handleClick(social.url)}
        />
      ))}
    </div>
  );
};

export default SocialLinks; 