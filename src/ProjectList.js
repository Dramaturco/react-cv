import ProjectEntry from "./ProjectEntry";
const ProjectList = ({ projects }) => {
  return (
    <div>
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
