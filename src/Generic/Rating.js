const Rating = ({ value, max }) => {
  const keys = [...Array(max).keys()];
  return (
    <span className="container-dots no-print">
      {keys.map((index) => (
        <span
          key={index}
          className={`dot ${index < value ? "filled" : "empty"}`}
        />
      ))}
    </span>
  );
};

export default Rating;