import React from "react";
import "./Background.css";
import ImageButton from "./ImageButton";

export const BackgroundTest = () => {
  const handleMediaButton = () => {
    // Handle button click event
  };

  return (
    <>
      <div class="background">
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>

        <div class="navigationMenu">
          <strong className="spaceStyle">
            <a>Home</a>
          </strong>
          <strong className="spaceStyle">
            <a>Portfolio</a>
          </strong>
          <strong className="spaceStyle">
            <a>Tech Stack</a>
          </strong>
          <strong className="spaceStyle">
            <a>Book a mentoring session!</a>
          </strong>
          <strong className="spaceStyle">
            <a>About BlockState&copy;</a>
          </strong>
          <strong className="spaceStyle">
            <a>Blog</a>
          </strong>
          <strong className="spaceStyle">
            <a>Got Projects?</a>
          </strong>
        </div>

        <div class="mediaStyle">
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/githublogo.png"}
            altText="Button Image"
            onClick={handleMediaButton}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/devpostlogo.png"}
            altText="Button Image"
            onClick={handleMediaButton}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/youtubelogo.png"}
            altText="Button Image"
            onClick={handleMediaButton}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/instagramlogo.png"}
            altText="Button Image"
            onClick={handleMediaButton}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/linkedinlogo.png"}
            altText="Button Image"
            onClick={handleMediaButton}
          />
        </div>

        <div className="aboutMe">
          <img
            class="avatar profilePosition"
            src={process.env.PUBLIC_URL + "/profilePicture.png"}
          ></img>
          <strong class="spaceStyleHeading headingPosition">YUV BINDAL</strong>
          <strong class="spaceStyleSubheading subheadingPosition">
            AI enthusiast/ Technoprenuer
          </strong>
          <strong class="spaceStyleText textPosition">
            Hey! I am Yuv, an aspiring technoprenuer. I am passionate about
            finding innovative solutions to global issues. I specialise in
            technologies such as <i>Computer Vision</i>, <i>Blockchain</i>, and{" "}
            <i>Natural Language Processing</i>.
          </strong>
        </div>
      </div>
    </>
  );
};
