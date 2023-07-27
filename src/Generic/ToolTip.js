import { useState } from "react";

const ToolTip = ({ children, text }) => {
  const [hover, setHover] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => {
        setHover(true);
        setAnimationClass("fade-in");
      }}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && <div className={`tooltip-box ${animationClass}`}>{text}</div>}
    </span>
  );
};
export default ToolTip;
