import { Rating } from "../Generic";
import { useState, Fragment } from "react";
import ToolTip from "../Generic/ToolTip";

const LanguageEntry = ({ name, fluency, comments }) => {
  const [expanded, setExpanded] = useState(false);

  return (

      <ToolTip
        text={
          <div className="language-box">
            <span>{name}</span>
            <Rating value={fluency} max={5} />
            <div className="language-comment-box no-print">
              {comments.map((comment) => (
                <span key={comment} className="language-comment">
                  {comment}
                </span>
              ))}
            </div>
          </div>
        }
      >
        <span className="language-name">{name}</span>
      </ToolTip>
  );
};

export default LanguageEntry;
