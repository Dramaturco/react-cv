import Rating from "./Rating";

const LanguageEntry = ({ name, fluency, comments }) => {
  return (
    <div className="language-box">
      {name}
      <Rating value={fluency} max={5}/>
      <div className="language-comment-box no-print">
        {comments.map((comment) => (
          <span key={comment} className="language-comment">{comment}</span>
        ))}
      </div>
    </div>
  );
};

export default LanguageEntry;
