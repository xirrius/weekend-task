import "./Sc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMapMarkerAlt,
  faSun,
  faGolfBallTee,
} from "@fortawesome/free-solid-svg-icons";

const Sc = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.url} alt={event.Event_Name} />
        <div className="slider__weather">
          <div className="weather_img">
            <img src="./img/weather.svg" alt="" />
          </div>
          <div className="temperature">
            <div className="avg__temperature">
              <span style={{fontSize: "1.5rem"}}>18</span>
              <span style={{fontSize: "0.5rem"}}> °C</span>
            </div>
            <div className="min-max__temperature">
              <span>29°</span>
              <span>16°</span>
            </div>
          </div>
        </div>
      </div>
      <div className="event-details">
        <div className="event-header">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "35px",
              fontFamily: "'Ivy Mode', sans-serif",
              letterSpacing: "0.79px",
              color: "#222222",
            }}
          >
            {event.Event_Name}
          </h3>
          <span className="eventhead-rating">
            <span className="event-rating">★★★★★</span>{" "}
            {event.Overall_Event_Rating} ({event.Seat_Booking_Availability}{" "}
            reviews)
          </span>
        </div>
        <p className="event-description">
          {event.Event_Description}...
          <span style={{ letterSpacing: ".35px", color: "#FF385C" }}>
            read more
          </span>
        </p>
        <div className="event-info">
          <div className="info-item" style={{ textAlign: "left" }}>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="event__date">
            {event.Event_Start_Date} {event.Event_Start_Time} -{" "}
            {event.Event_End_Date} {event.Event_End_Time}
            </span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {event.Event_Location}
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGolfBallTee} />
            {event.Event_Category}
          </div>
          <div className="info-item last-item">
            <div style={{ display: "flex", gap: "4px" }}>
              <img
                src={`./img/overwhelmed.svg`}
                alt=""
                style={{ width: "16px" }}
              />{" "}
              {event.vibes_text}
            </div>
            <div>
              <p style={{ fontFamily: "'Brown', sans-serif" }}>Scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sc;
