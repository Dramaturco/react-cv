import React from "react";
import PropTypes from "prop-types";
import LanguageSwitch from "./LanguageSwitch";

function Intro({ text, imageUrl }) {

  const backgroundImage = `url(${imageUrl})`;

  //TODO: add tooltip with alt text for image

  return (
    <div className="intro gradient">
      <LanguageSwitch />
      <p className="intro-text" dangerouslySetInnerHTML={{ __html: text }}></p>
      <div className="avatar" style={{backgroundImage}}></div>
    </div>
  );
}

Intro.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

export default Intro;
