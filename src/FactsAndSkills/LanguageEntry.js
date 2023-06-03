import { Rating } from "../Generic";
import { useState, Fragment } from "react";

const LanguageEntry = ({ name, fluency, comments }) => {
  //const [expanded, setExpanded] = useState(false);
  const expanded = false;
  return (
    <div className={`language-box${expanded ? " expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
      <span className="language-name">{name}</span>
      {expanded && (
        <Fragment>
          <Rating value={fluency} max={5} />
          <div className="language-comment-box no-print">
            {comments.map((comment) => (
              <span key={comment} className="language-comment">
                {comment}
              </span>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default LanguageEntry;
