const ProjectEntry = ({ name, abstract, description, technologies }) => {
  return (
    <div className="project-entry">
      <h4>
        {name} - <i>{abstract}</i>{" "}
      </h4>
      <p>{description}</p>
      <div className="project-technologies-box">
        {technologies.map((tech) => (
          <span key={tech} className="project-technology">
            {tech + " "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectEntry;
