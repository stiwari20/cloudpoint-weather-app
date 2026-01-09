import DailyCard from "./DailyCard"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const temp = [14, 20, 12, 14, 10, 9, 17];

const DailyForecast = () => {
  return (
    <div className="daily-data">
      {days.map(function(day, idx){
        return <DailyCard key={idx} day={day} temp={temp[idx]} />
      })}
    </div>
  )
}

export default DailyForecast