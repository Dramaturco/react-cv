const ProjectEntry = ({ name, abstract, description, technologies }) => {
  return (
    <div>
      <h4>
        {name} - <i>{abstract}</i>{" "}
      </h4>
      <p>{description}</p>
      <div className="language-comment-box">
        {technologies.map((comment) => (
          <span key={comment} className="language-comment">
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectEntry;
