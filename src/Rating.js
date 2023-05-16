const Rating = ({value, max}) => {
  const keys = [...Array(max).keys()]
  return (
    <span className="container-dots">
      {keys.map(index => <span className={`dot ${index < value ? "filled" : "empty"}`}/>)}
    </span>
  )
}

export default Rating