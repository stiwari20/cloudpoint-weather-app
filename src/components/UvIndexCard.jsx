import { useSelector } from "react-redux";
import uvImg from "../assets/uv-image.png"

const UvIndexCard = () => {

  const uvIndex = useSelector(state => state.weather.uvIndex)

  return (
    <div className="uv-index-card">
      <p>UV Index</p>
      {/* <h1>img</h1> */}
      <img src={uvImg} alt="" />
      <p>{uvIndex} uv</p>
    </div>
  );
};

export default UvIndexCard;
