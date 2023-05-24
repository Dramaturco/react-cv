import TimelineEntry from "./TimelineEntry";
const Timeline = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <TimelineEntry
          title={entry.title}
          start={entry.start}
          end={entry.end}
          type={entry.type}
          text={entry.text}
        />
      ))}
    </div>
  );
};

export default Timeline;
