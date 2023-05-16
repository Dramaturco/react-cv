import Rating from "./Rating";

const Language = ({ name, fluency, comments }) => {
  return (
    <div className="language-box">
      {name}
      <Rating value={fluency} max={5}/>
      <div className="language-comment-box">
        {comments.map((comment) => (
          <span key={comment} className="language-comment">{comment}</span>
        ))}
      </div>
    </div>
  );
};

export default Language;
