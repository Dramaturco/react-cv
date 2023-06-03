import TimelineDate from "./TimelineDate";
const TimelineEntry = ({ title, text, start, end, type }) => {
  return(
    <div className="timeline-entry">
      <div className="timeline-left-column">
        <TimelineDate date={start}/>
        <div className="vertical-line"></div>
        {end && <TimelineDate date={end}/>}
      </div>
      <div className="timeline-right-column">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="timeline-entry-type">{type}</div>
      </div>
    </div>
  )
}

export default TimelineEntry