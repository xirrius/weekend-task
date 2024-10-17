import { emotions, EventDetail, SliderCardData } from "../../MockData";
import Rslide from "../Recoslide/Rslide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Number.css";

const Number = () => {
  return (
    // <div className="num_card">
    //   {SliderCardData.map((event, index) => (
    //     <div className="num_main" key={index}>
    //       <div className="main_num">
    //         <Rslide event={event} />
    //       </div>
    //       <div className="numimg">
    //         <img src={`./img/${index + 1}.svg`} alt="" />
    //       </div>
    //       <div className="icon_main">
    //         <FontAwesomeIcon
    //           icon={faHeart}
    //           className="heart-icon"
    //           style={{
    //             fontSize: "24px",
    //             stroke: "white",
    //             strokeWidth: "40px",
    //           }}
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="event-cards__container">
      {EventDetail.slice(0, 5).map((itm, idx) => (
        <div key={itm.Event_ID} className="event-cards__card">
          <div className="events__card-img">
            <img src={`./img/${itm.url}`} alt="img" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              className={`${itm.isLiked ? "liked" : ""}`}
              onClick={() => changeLike(itm.Event_ID)}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="numimg">
              <img src={`./img/${idx + 1}.svg`} alt="" />
            </div>{" "}
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
  );
};

export default Number;
