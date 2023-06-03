import { useState } from "react";

const ToolTip = ({ children, text }) => {
  const [hover, setHover] = useState(true);
  const [animationClass, setAnimationClass] = useState("");
  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => {
        setHover(true);
        setAnimationClass("fade-in");
      }}
      onMouseLeave={() => {
        setTimeout(() => setHover(false), 750);
        setAnimationClass("fade-out");
      }}
    >
      {children}
      {hover && <div className={`tooltip-box ${animationClass}`}>{text}</div>}
    </div>
  );
};
export default ToolTip;
