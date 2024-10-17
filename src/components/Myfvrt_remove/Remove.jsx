import { EventDetail, SliderCardData, emotions } from "../../MockData";
// import Rslide from "../Recoslide/Rslide";
import './Remove.css';

const Remove = () => {
  const handleRemove = (index) => {
    console.log(`Remove event at index: ${index}`);
  };
  return (
    <div className="Remove_card">
      <div className="event-cards__container">
        {EventDetail.slice(0, 8).map((itm) => (
          <div key={itm.Event_ID} className="event-cards__card">
            <div className="events__card-img">
              <img src={`./img/${itm.url}`} alt="img" />
              <button className="btn_rmv">Remove</button>
            </div>
            <div className="events__card-content">
              <div className="events-info">
                <div className="events-info__vibe">
                  <img src={`${emotions[itm.Operator_Rating]}`} alt="" />
                  <p>{itm.vibes_text || "Overwhelmed vibes"}</p>
                </div>
                <p className="events-info__date">Nov 10-29</p>
              </div>
              <div className="event__name">{itm.Event_Name}</div>
              <div className="event__time">
                {itm.Event_Start_Time} - {itm.Event_End_Time || "05:00 PM"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remove;
 