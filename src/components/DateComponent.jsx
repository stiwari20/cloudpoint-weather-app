


const DateComponent = () => {
  const today = new Date();
  const longMonthName = today.toLocaleString("default", { month: "long" });
  const shortMonthName = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();
  const dayName = today.toLocaleString("default", { weekday: "long" });

  

  return (
    <div className="month">
      <span>{longMonthName}</span> <span>{year}</span>
      <br />
      <p>{`${dayName}, ${shortMonthName} ${today.getDate()}`}</p>
    </div>
  );
};

export default DateComponent;
