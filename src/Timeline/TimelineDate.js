const TimelineDate = ({date}) => {
  return (
    <span>
      {date.month && <span>{date.month} </span>}
      <span>{date.year}</span>
    </span>
  )
}
export default TimelineDate