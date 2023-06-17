import React from "react";
import "./Background.css";
import ImageButton from "./ImageButton";
import { useState } from "react";
export const BackgroundTest = () => {
  const handleGithub = () => {
    window.location.href = 'https://github.com/YuvBindal'
  };
  const handleYoutube = () => {
    window.location.href = 'https://www.youtube.com/@yuvbindal1226'
  };

  const handleDevpost = () => {
    window.location.href = 'https://devpost.com/yuv2bindal'

  }
  const handleLinkedin = () => {
    window.location.href= 'https://www.linkedin.com/in/yuvbindal/'
  }
  const handleInstagram = () => {
    window.location.href= 'https://www.instagram.com/yuvbindal/'
  }

  const [isHovered, setIsHovered] = useState(false);

  const playSound = () => {
    setIsHovered(true);
  };

  const stopSound = () => {
    setIsHovered(false);
  };

  

  return (
    <>
      <div className="background">
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="navigationMenu">
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Home
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Portfolio
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Tech Stack
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Book a mentoring session!
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              About BlockState&copy;
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Blog
              {isHovered && (
                <audio autoPlay>
                  <source src="whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>
          <strong
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
            id="homeButton"
            className="spaceStyle"
          >
            <a>
              Got projects?
              {isHovered && (
                <audio autoPlay>
                  <source src="fast-whoosh.mp3" type="audio/mpeg" />{" "}
                  {/* Replace "hover-sound.mp3" with the path to your audio file */}
                </audio>
              )}
            </a>
          </strong>

        </div>

        <div className="mediaStyle">
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/githublogo.png"}
            altText="Button Image"
            onClick={handleGithub}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/devpostlogo.png"}
            altText="Button Image"
            onClick={handleDevpost}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/youtubelogo.png"}
            altText="Button Image"
            onClick={handleYoutube}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/instagramlogo.png"}
            altText="Button Image"
            onClick={handleInstagram}
          />
          <ImageButton
            imageSrc={process.env.PUBLIC_URL + "/linkedinlogo.png"}
            altText="Button Image"
            onClick={handleLinkedin}
          />
        </div>

        <div className="aboutMe">
          <img
            className="avatar profilePosition"
            src={process.env.PUBLIC_URL + "/profilePicture.png"}
          ></img>
          <strong className="spaceStyleHeading headingPosition">YUV BINDAL</strong>
          <strong className="spaceStyleSubheading subheadingPosition">
            AI enthusiast/ Technoprenuer
          </strong>
          <strong className="spaceStyleText textPosition">
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
