import { useSelector } from "react-redux"


const FeelsLikeCard = () => {

  const feelsLike = useSelector(state => state.weather.feelsLike)

  return (
    <div className="feels-like">
      <p>Feels like</p>
      <h3>{feelsLike}&deg;<span>C</span></h3>
    </div>
  )
}

export default FeelsLikeCard