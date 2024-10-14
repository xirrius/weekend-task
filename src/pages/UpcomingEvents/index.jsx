import { useEffect, useState } from "react";
import "./upcoming-events.css";
import { EventDetail, emotions } from "../../MockData";

const categoryList = [
  { name: "Stand Up Comedy", selected: false },
  { name: "RAMP Walk", selected: false },
  { name: "Box Cricket", selected: false },
  { name: "Swimming", selected: false },
  { name: "Golf Tournament", selected: true },
  { name: "Singing", selected: false },
  { name: "Talks Shows", selected: false },
  { name: "Kite Surfing", selected: false },
  { name: "Book Exhibitions", selected: false },
];

const UpcomingEvents = () => {
  const [filters, setFilters] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState(categoryList);
  const [selected, setSelected] = useState({
    drive: 2,
    walk: 2,
    no_limit: false,
  });
  const [data, setData] = useState(EventDetail);
  const [shouldRender, setShouldRender] = useState(true); 

  useEffect(() => {
    if (showFilters) {
      const timer = setTimeout(() => {
        setShouldRender(false); 
      }, 500);

      return () => clearTimeout(timer); 
    } else {
      setShouldRender(true);
    }
  }, [showFilters]);

  useEffect(() => {
    if (filters) setShowFilters(true);
    else setShouldRender(true)
  }, [filters]);

  const handleAnimationEnd = () => {
    if (!filters) setShowFilters(false);
  };

  const handleSelect = (name) => {
    const updatedData = categories.map((item) => {
      if (item.name === name) {
        return { ...item, selected: !item.selected }; // Toggle isLiked
      }
      return item;
    });
    setCategories(updatedData);
  };

  const changeLike = (id) => {
    const updatedData = data.map((item) => {
      if(item.Event_ID === id) {
        return {...item, isLiked:!item.isLiked}
      }
      return item
    })
    setData(updatedData)
    console.log(data)
  }

  return (
    <div className="upcoming-events">
      <div className="container">
        <div className="upcoming-events__heading">
          <h1>Hey Charlie,</h1>
          <h3>Let&apos;s find something exiting for you.</h3>
        </div>
        <button className="filter-btn" onClick={() => setFilters(true)}>
          Filters
        </button>
        {showFilters && (
          <div
            className={`filters small ${
              filters ? "event-show-dropdown" : "event-hide-dropdown"
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <div className="small-heading">
              <p>Filters</p>
              <div className="filters-close" onClick={() => setFilters(false)}>
                <img src="./img/close.svg" alt="" />
              </div>
            </div>
            <div className="row-1">
              <div className="filter__schedules">
                <p>What suits your schedules?</p>
                <div className="schedules__input">
                  <div className="input__date">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="#FF385C"
                        width="24"
                        height="24"
                      >
                        <path d="M120 0c4.4 0 8 3.6 8 8l0 56 192 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-16 0-48C0 92.7 28.7 64 64 64l48 0 0-56c0-4.4 3.6-8 8-8zM432 192L16 192l0 256c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-256zM112 120l0-40L64 80c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L128 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
                      </svg>
                    </div>
                    <input type="date" />
                  </div>
                  <div className="input__location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FF385C"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-map-pin"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input type="text" placeholder="Pick a location" />
                  </div>
                </div>
              </div>
              <div className="filter__travel">
                <p>How far are you willing to travel?</p>
                <div className="travel__input">
                  <div className="travel__walk">
                    <span
                      className={`${selected.walk === 1 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, walk: 1 })}
                    >
                      10 mins walking
                    </span>
                    <span
                      className={`${selected.walk === 2 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, walk: 2 })}
                    >
                      20 mins walking
                    </span>
                    <span
                      className={`${selected.walk === 3 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, walk: 3 })}
                    >
                      30 mins walking
                    </span>
                  </div>
                  <div className="travel__drive">
                    <span
                      className={`${selected.drive === 1 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, drive: 1 })}
                    >
                      10 mins drive
                    </span>
                    <span
                      className={`${selected.drive === 2 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, drive: 2 })}
                    >
                      20 mins drive
                    </span>
                    <span
                      className={`${selected.drive === 3 ? "active" : ""}`}
                      onClick={() => setSelected({ ...selected, drive: 3 })}
                    >
                      30 mins drive
                    </span>
                  </div>
                  <div
                    className={`travel__no-limits ${
                      selected.no_limit ? "active" : ""
                    }`}
                    onClick={() =>
                      setSelected({ ...selected, no_limit: !selected.no_limit })
                    }
                  >
                    No limits
                  </div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <p>You can always filter out the events by category wise.</p>
              <div className="filter__categories">
                {categories.map((itm) => (
                  <div
                    key={itm}
                    className={`filter__category ${
                      itm.selected ? "active" : ""
                    }`}
                    onClick={() => handleSelect(itm.name)}
                  >
                    {itm.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="filters-apply">
              <button onClick={() => setFilters(false)}>Apply</button>
            </div>
          </div>
        )}
        <div className="filters large">
          <div className="row-1">
            <div className="filter__schedules">
              <p>What suits your schedules?</p>
              <div className="schedules__input">
                <div className="input__date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#FF385C"
                    width="24"
                    height="24"
                  >
                    <path d="M120 0c4.4 0 8 3.6 8 8l0 56 192 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-16 0-48C0 92.7 28.7 64 64 64l48 0 0-56c0-4.4 3.6-8 8-8zM432 192L16 192l0 256c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-256zM112 120l0-40L64 80c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L128 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
                  </svg>
                  <input type="date" />
                </div>
                <div className="input__location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF385C"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <input type="text" placeholder="Pick a location" />
                </div>
              </div>
            </div>
            <div className="filter__travel">
              <p>How far are you willing to travel?</p>
              <div className="travel__input">
                <div className="travel__walk">
                  <span
                    className={`${selected.walk === 1 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, walk: 1 })}
                  >
                    10 mins walking
                  </span>
                  <span
                    className={`${selected.walk === 2 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, walk: 2 })}
                  >
                    20 mins walking
                  </span>
                  <span
                    className={`${selected.walk === 3 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, walk: 3 })}
                  >
                    30 mins walking
                  </span>
                </div>
                <div className="travel__drive">
                  <span
                    className={`${selected.drive === 1 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, drive: 1 })}
                  >
                    10 mins drive
                  </span>
                  <span
                    className={`${selected.drive === 2 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, drive: 2 })}
                  >
                    20 mins drive
                  </span>
                  <span
                    className={`${selected.drive === 3 ? "active" : ""}`}
                    onClick={() => setSelected({ ...selected, drive: 3 })}
                  >
                    30 mins drive
                  </span>
                </div>
                <div
                  className={`travel__no-limits ${
                    selected.no_limit ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelected({ ...selected, no_limit: !selected.no_limit })
                  }
                >
                  No limits
                </div>
              </div>
            </div>
          </div>
          <div className="row-2">
            <p>You can always filter out the events by category wise.</p>
            <div className="filter__categories">
              {categories.map((itm) => (
                <div
                  key={itm}
                  className={`filter__category ${itm.selected ? "active" : ""}`}
                  onClick={() => handleSelect(itm.name)}
                >
                  {itm.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {shouldRender &&  <div className="event-cards__container">
          {data.map((itm) => (
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
        </div>}
        <button className="load_btn">Load More</button>
      </div>
    </div>
  );
};
export default UpcomingEvents;
