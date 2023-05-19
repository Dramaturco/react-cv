const TimelineDate = ({date}) => {
  return (
    <div className="timeline-date">
      {date.month && <span className="month">{date.month} </span>}
      <span className="year">{date.year}</span>
    </div>
  )
}
export default TimelineDate