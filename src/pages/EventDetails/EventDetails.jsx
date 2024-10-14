import { useParams } from "react-router-dom";
import { RecommendationBannerData } from "../../MockData";
import "./event-details.css";

const EventDetails = () => {
  const { eventId } = useParams();
  
  const event = RecommendationBannerData.find(
    (event) => event.Event_ID === parseInt(10005)
  );
  if (!event) {
    return <p>Event not found</p>;
  }

  const {
    imgurl,
    Event_Name,
    Event_Description,
    Event_Location,
    Overall_Event_Rating,
    vibes_text,
  } = event;

  return (
    <div className="event-page">
      <div className="feedback-section">
        <div>
          <p className="fd_charli">Hey Charlie,</p>
          <p className="pfeedback-section">
            We are sure that you have enjoyed this event a lot. Would you like
            to share your feedback with us? It helps us improve and serve you
            better.
          </p>
        </div>
        <div>
          <button className="feedback-btn">Add a review</button>
        </div>
      </div>
      <div className="Fevent-details">
        <div className="filebox">
          <span className="Fevent-name2">{Event_Name}</span>
          <span className="Frating">
            {" "}
            <span style={{ color: "red" }}>★★★★★</span>
            {Overall_Event_Rating}-{event.Seat_Booking_Availability} reviews -{" "}
            {Event_Location}
          </span>
        </div>
        <div>
          <span className="Fevent-status">{event.Event_Status}</span>
        </div>
      </div>
      <div className="main">
        <div className="Fevent-images">
          {imgurl.map((imgData, index) => (
            <img
              key={index}
              src={`/${imgData.img}`}
              alt={Event_Name}
              className={`img${index + 1}`}
            />
          ))}
        </div>
        <div className="Fshow-more">
          <button>Show all</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
