import { styled } from "styled-components";
import TimelineDate from "./TimelineDate";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";
import ProjectEntry from "../Projects/ProjectEntry";
const TimelineEntry = ({ title, text, start, end, type, projects }) => {
  const theme = useContext(ThemeContext);
  const Title = styled.h4`
    color: ${theme.accentColor};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.375rem; /* 135.714% */
  `;
  console.log(projects);
  return (
    <div className="timeline-entry">
      <div>
        <Title>
          <TimelineDate date={start} />
          {" - "}
          {end && <TimelineDate date={end} />}
          {":"} <br />
          {title}
        </Title>
        <p>{text}</p>
      </div>
      <h3>Projekte:</h3>
      {projects &&
        projects.map((project) => (
          <ProjectEntry
            name={project.name}
            key={project.name}
            abstract={project.abstract}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
    </div>
  );
};

export default TimelineEntry;
