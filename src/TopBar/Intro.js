import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Intro({ text, imageUrl }) {
  const GradientBox = styled.div`
    width: 90rem;
    height: 44.875rem;
    flex-shrink: 0;
    border-radius: 0rem 0rem 1rem 1rem;
    background: linear-gradient(77deg, #98c9e4 0%, #36cfb4 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 4rem 6rem;
    position: relative;
    margin: 0 auto;
  `;

  const Text = styled.p`
    color: #fff;
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.625rem; /* 115.625% */
  `;

  const Image = styled.img`
    width: 16rem;
    height: 16rem;
    border-radius: 1rem;
    background: url(${imageUrl}), lightgray 50% / cover no-repeat;
    box-shadow: 0px 3px 9px 0px rgba(103, 54, 207, 0.50);
    position: absolute;
    bottom: -8rem;
    right: 10rem;
  `;

  return (
    <GradientBox>
      <Text>{text}</Text>
      <Image />
    </GradientBox>
  );
}

Intro.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Intro;
