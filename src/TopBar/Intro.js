import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ToolTip from "../Generic/ToolTip";

function Intro({ text, imageUrl }) {
  const Text = styled.p`
    color: #fff;
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.625rem; /* 115.625% */
  `;

  const StyledImage = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 1rem;
    background: url(${imageUrl}), lightgray 50% / cover no-repeat;
    box-shadow: 0px 3px 9px 0px rgba(103, 54, 207, 0.5);
    position: absolute;
    bottom: -8rem;
    right: 10rem;
  `;

  //TODO: add tooltip with alt text for image

  return (
    <div className="intro gradient">
      <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
      <StyledImage/>
    </div>
  );
}

Intro.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

export default Intro;
