import { useState } from "react";

const ToolTip = ({ children, text }) => {
  const [hover, setHover] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => {
        setHover(true);
        setAnimationClass("fade-in");
      }}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && <div className={`tooltip-box ${animationClass}`}>{text}</div>}
    </div>
  );
};
export default ToolTip;
