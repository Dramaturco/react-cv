import TimelineDate from "./TimelineDate";
import { ProjectList } from "../Projects";

const TimelineEntry = ({ title, text, start, end, type, projects }) => {
  return (
    <div className="timeline-entry">
      <div>
        <h4>
          <TimelineDate date={start} />
          {" - "}
          {end && <TimelineDate date={end} />}
          {":"} <br />
          {title}
        </h4>
        <p>{text}</p>
      </div>
      {projects && (
        <ProjectList title={projects.title} projects={projects.content} />
      )}
    </div>
  );
};

export default TimelineEntry;
