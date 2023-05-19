import TimelineDate from "./TimelineDate";
const Timeline = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.title} className="timeline-entry">
          <div className="timeline-left-column">
            <TimelineDate date={entry.start}/>
            <div className="vertical-line"></div>
            {entry.end && <TimelineDate date={entry.end}/>}
          </div>
          <div className="timeline-right-column">
            <h4>{entry.title}</h4>
            <p>{entry.text}</p>
            <div className="timeline-entry-type">{entry.type}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
