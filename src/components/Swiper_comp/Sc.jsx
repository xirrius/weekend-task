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
      </div>
      <div className="event-details">
        <div className="event-header">
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "35px",
              fontFamily: "IvyMode",
              letterSpacing: "0.79px",
              color: "#222222",
              opacity: 1,
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
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendar} />
            {event.Event_Start_Date} {event.Event_Start_Time} -{" "}
            {event.Event_End_Date} {event.Event_End_Time}
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
            <div>
              <FontAwesomeIcon icon={faSun} />
              {event.vibes_text}
            </div>
            <div>
              <p>Scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sc;
