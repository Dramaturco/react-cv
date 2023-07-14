import { useState } from "react";
import styled, { css } from 'styled-components'
const Rating = ({ value, max }) => {
  const calculateRating = (current, max) => {
    const percentage = (current / max) * 100;
    return `${percentage}%`;
  }
  const [percentage, setPercentage] = useState(calculateRating(value, max));

  const Frame = styled.div`
    width: 100%;
    background: #E1E1E1;
    height: 1rem;
  `
  const RatingBar = styled.div`
    width: ${percentage};
    background: #303030;
    height: 1rem;
  `

  return (
    <Frame>
      <RatingBar />
    </Frame>
  );
};

export default Rating;
