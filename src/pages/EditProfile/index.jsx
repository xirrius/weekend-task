import "./edit-profile.css";

const data = [
  {
    id: 1,
    name: "Golf",
    img: "./img/golf.png",
    isLiked: true,
  },
  {
    id: 2,
    name: "Music",
    img: "./img/music.png",
    isLiked: false,
  },
  {
    id: 3,
    name: "Rooms",
    img: "./img/Product1.png",
    isLiked: true,
  },
  {
    id: 4,
    name: "Exploring",
    img: "./img/exploring.png",
    isLiked: false,
  },
  {
    id: 5,
    name: "Socializing",
    img: "./img/socializing.png",
    isLiked: false,
  },
  {
    id: 6,
    name: "Cooking & dining",
    img: "./img/cooking&dinner.png",
    isLiked: false,
  },
  {
    id: 7,
    name: "Plays",
    img: "./img/plays.png",
    isLiked: false,
  },
  {
    id: 8,
    name: "Chinese food",
    img: "./img/chinese-food.png",
    isLiked: false,
  },
  {
    id: 9,
    name: "Screaming children",
    img: "./img/screaming-child.png",
    isLiked: false,
  },
  {
    id: 10,
    name: "Walking for long",
    img: "./img/walking-for-long.png",
    isLiked: false,
  },
  {
    id: 11,
    name: "Water sports",
    img: "./img/water-sports.png",
    isLiked: false,
  },
];

const EditProfile = () => {

  const handleLike = () => {
    
  }

  return (
    <div className="edit-profile">
      <div className="container">
        <h2 className="edit-profile__title">Edit Charlie&apos;s profile</h2>
        <div className="edit-profile__edit">
          <div className="edit__img">
            <img src="./img/music.png" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27.232"
              height="26"
              viewBox="0 0 27.232 26"
            >
              <g
                id="Icon_feather-edit-3"
                data-name="Icon feather-edit-3"
                transform="translate(-3.5 -3.318)"
              >
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M18,30H31.5"
                  transform="translate(-1.768 -1.682)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M23.356,5.189a2.968,2.968,0,0,1,4.19,4.205L10.087,26.916,4.5,28.318l1.4-5.607Z"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <div className="edit__list">
            <div className="form__group">
              <label className="form__label">What should we call you?</label>
              <input
                type="text"
                className="form__input"
                defaultValue="Charlie"
              />
            </div>
            <div className="form__group">
              <label className="form__label">
                What&apos;s your email address?
              </label>
              <input
                type="email"
                className="form__input"
                placeholder=""
                defaultValue="Charlie.mathwe@gmail.com"
              />
            </div>
            <div className="form__group">
              <label className="form__label">
                On which number can we contact you?
              </label>
              <input
                type="tel"
                className="form__input"
                defaultValue="9971 87 7676"
              />
            </div>
            <div className="form__group">
              <label className="form__label">
                When can we wish a happy birthday?
              </label>
              <input
                type="date"
                className="form__input"
                placeholder=""
                defaultValue="1979-01-08"
              />
            </div>
            <ul className="activity__list">
              {data.map((item) => (
              <li className="activity__list--item" key={item.id} onClick={() => handleLike(item.id)}>
                <div className="activity__info">
                  <div className="activity__image">
                    <img src={item.img} alt="activity" />
                    <div className="activity__image--overlay"></div>
                    <div className="activity__name">{item.name}</div>
                  </div>
                  {item.isLiked && <div className="activity__selected">
                    <div className="icon-thumbs-up"></div>
                  </div>}
                </div>
              </li>
              ))}
            </ul>
            <div className="form__group m-0">
              <label className="form__label">
                Please let us know if you have some interests
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Add multiple interests comma ( , ) separated"
              />
            </div>
            <div className="btn--wrap">
              <button className="btn btn__red">Save</button>
              <button className="btn btn__transparent">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
