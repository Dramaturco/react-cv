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
              key={entry.title}
              {...entry}
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
