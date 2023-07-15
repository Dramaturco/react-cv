import ProjectEntry from "./ProjectEntry";
const ProjectList = ({ projects, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {projects.map((project) => (
        <ProjectEntry
          key={project.name}
          name={project.name}
          abstract={project.abstract}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};
export default ProjectList;
