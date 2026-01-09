import { useSelector } from "react-redux"


const VisibilityCard = () => {

  const visibility = useSelector(state => state.weather.visibility);

  return (
    <div className="visibility">
        <p>Visibility</p>
        <h3>{visibility} <span>Km</span> </h3>
    </div>
  )
}

export default VisibilityCard