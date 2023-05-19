const Timeline = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.year} className="timeline-entry">
          <div className="timeline-left-column">
            <div className="timeline-date"><span className="month">{entry.month} </span><span className="year">{entry.year}</span></div>
            <div className="vertical-line"></div>
          </div>
          <div className="timeline-right-column">
            <h4>{entry.title}</h4>
            <p>{entry.text}</p>
            <div className="timeline-entry-type">
              {entry.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
