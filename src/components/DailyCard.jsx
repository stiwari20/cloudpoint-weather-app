import PropTypes from "prop-types";
import cloudy from "../assets/cloudy-day.png";

const DailyCard = (props) => {
  return (
    <div className="card">
            <p>{props.day}</p>
            <img src={cloudy} alt="" />
            <p>{props.temp}&deg;</p>
        </div>
  )
}

export default DailyCard



DailyCard.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};
