import TimelineEntry from "./TimelineEntry";
import { Fragment } from "react";
const Timeline = ({ entries }) => {
  return (
    <div>
      {entries
        .sort((a, b) => a.end.year < b.end.year)
        .map((entry, index) => (
          <Fragment>
            <TimelineEntry
              title={entry.title}
              start={entry.start}
              end={entry.end}
              type={entry.type}
              text={entry.text}
              projects={entry.projects}
              key={entry.title}
            />
            {index < entries.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </Fragment>
        ))}
    </div>
  );
};

export default Timeline;
