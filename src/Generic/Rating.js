import { useState } from "react";

const Rating = ({ value, max }) => {
  const calculateRating = (current, max) => {
    const percentage = (current / max) * 100;
    return `${percentage}%`;
  }
  const [percentage, setPercentage] = useState(calculateRating(value, max));

  return (
    <div className="rating-frame">
      <div className="rating-bar" style={{width: percentage}}></div>
    </div>
  );
};

export default Rating;
