import { useSelector } from "react-redux"


const HumidityCard = () => {

  const humidity = useSelector(state => state.weather.humidity)

  return (
    <div className="humidity">
      <p>Humidity</p>
      <h3>{humidity}<span>%</span></h3>
    </div>
  )
}

export default HumidityCard