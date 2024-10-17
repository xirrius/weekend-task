import "./Rcard.css";

const Rcard = ({ event }) => {
  if (!event) {
    return <div>No event data available</div>;
  }
  const {
    url,
    Event_Name,
    Seat_Booking_Availability,
    Event_Start_Date,
    Overall_Event_Rating,
  } = event;

  return (
    <div className=" event-cards__card">
      <div className=" events__card-img">
        <img src={url} alt="Event" />
      </div>
      <div className="events__card-content" style={{rowGap: "0.2rem"}}>
        <div>
          <p className="event__name">{Event_Name}</p>
        </div>
        <div>
          <p>Number of seats: {Seat_Booking_Availability}</p>
          <p style={{ color: "rgb(143, 143, 143)" }}>{Event_Start_Date}</p>
        </div>
        <p style={{ color: "rgb(143, 143, 143)" }}>
          You rated event:{" "}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                style={{
                  color:
                    i < Math.floor(Overall_Event_Rating)
                      ? "#FFD700"
                      : "#dcdcdc",
                  fontSize: "18px",
                  marginRight: "2px",
                }}
              >
                ★
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Rcard;
