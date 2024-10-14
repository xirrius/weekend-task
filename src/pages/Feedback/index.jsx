import { useState } from "react";
import "./feedback.css";

const resData = [
  {
    id: 1,
    title: "Great experience!",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    reviewed: true,
    review: 0,
    date: "Nov 17, 2022",
    img: {
      url: "./img/Event-Banner.png",
      title: "Surfing at leasure",
    },
  },
  {
    id: 2,
    title:
      "Hey Charlie, you haven't added you feedback yet. Please share your experience with us to serve you better next time.",
    reviewed: false,
    date: "Nov 12, 2022",
    img: {
      url: "./img/spa_0.png",
      title: "Swimming game for below 18 year kids",
    },
  },
  {
    id: 3,
    title: "Thank you Unified Guests for this great experience!",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    reviewed: true,
    review: 1,
    date: "Nov 17, 2022",
    img: {
      url: "./img/holiday_0.png",
      title: "Live comedy Performance in front of live audience",
    },
  },
  {
    id: 4,
    title: "Love all the activities!",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    reviewed: true,
    review: 0,
    date: "Nov 11, 2022",
    img: {
      url: "./img/cusine_0.png",
      title: "Surfing at leasure",
    },
  },
];

const emotions = [
  "./img/overwhelmed.svg",
  "./img/joy.svg",
  "./img/appreciation.svg",
  "./img/boredom.svg",
  "./img/disappointed.svg",
  "./img/anger.svg",
];

const Feedback = () => {

const [data, setData] = useState(resData)

const changeReview = (id, idx) => {
  const updatedData = data.map((item) => {
    if (item.id === id) {
      return { ...item, review: idx }; // Toggle isLiked
    }
    return item;
  });
  setData(updatedData); 
}

const setReviewed = (id) => {
  const updatedData = data.map((item) => {
    if (item.id === id) {
      return { ...item, reviewed: true }; // Toggle isLiked
    }
    return item;
  });
  setData(updatedData); 
}

  return (
    <div className="feedback">
      <div className="feedback__header container-fluid">
        <div className="container">
          <div className="header__text">
            <div className="header__icon">
              <img src="./img/overwhelmed.svg" alt="" />
            </div>
            <h1>Overwhelmed experience</h1>
            <h1>Your Vibe-O-Meter reading exits us too</h1>
            <p>
              We are happy too because we successfully keep you happy during
              this visit to Sindalah City.
            </p>
          </div>
          <div className="header__img">
            <img src="./img/vibe-o-meter.svg" alt="" />
          </div>
        </div>
        <div className="backdrop--filter"></div>
      </div>
      <div className="feedback__content">
        <div className="container">
          <h1>
            Hi Charlie, <br /> here are the glimpse of your feedback shared with
            us.
          </h1>
          {data.map((item) => (
            <div className="feedback__item" key={item.id}>
              <div className="feedback__item-img">
                <img src={item.img.url} alt="" />
                <div className="feedback__img-overlay">
                  <h4>{item.img.title}</h4>
                  <p>Nov 10-29, 2022</p>
                  <div className="feedback-stars">
                    <p
                      className="feedback-review"
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      123 reviews
                    </p>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 108.9 103.6"
                      >
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1" fill="#FFEE00">
                            <polygon
                              fill="#FFEE00"
                              points="54.4 0 71.3 34.1 108.9 39.6 81.7 66.1 88.1 103.6 54.4 85.9 20.8 103.6 27.2 66.1 0 39.6 37.6 34.1 54.4 0"
                            />
                          </g>
                        </g>
                      </svg>
                      5.0
                    </div>
                  </div>
                </div>
              </div>
              <div className="feedback__item-content">
                <p className="feedback__item-content-date">{item.date}</p>
                <h1>{item.title}</h1>
                {item.reviewed ? (
                  <>
                    <p>{item.desc}</p>
                    <ul className="emotion__list">
                      {emotions.map((emotion, idx) => (
                        <li
                          className={`emotion__list--item ${
                            item.review === idx ? "active" : ""
                          }`}
                          key={idx}
                          onClick={() => changeReview(item.id, idx)}
                        >
                          <img src={emotion} alt="" />
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <button className="add__review" onClick={() => setReviewed(item.id)}>Add a review</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Feedback;
