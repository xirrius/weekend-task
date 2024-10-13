import { useState } from "react";
import './settings.css'

const data = [
  {
    title: "Personal and Account Information",
    desc: "Would you like to share your personal information with us to know you better?",
  },
  {
    title: "Consent for sharing information with operators",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
  },
  {
    title: "Manage your data",
    desc: "Would you like to share your personal information with us to know you better?",
  },
  {
    title: "Password and Security",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
  },
];

const Settings = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="settings">
        <div className="container">
          <div className="heading">
            <h1>Good Morning Charlie!</h1>
            <p>
              You can change the settings for your personal data and other
              information.
            </p>
          </div>
          <div className="list">
            {data.map((item, idx) => (
              <div className="list-item" key={idx}>
                <div className="list-item__text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div>
                  <label className="switch">
                    <input type="checkbox" onClick={() => setToggle(!toggle)} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="others">
            <div className="others-item">
              <div className="others-item__text">
                <h3>Notifications</h3>
                <p>Which type of notifications would you like to receive?</p>
              </div>
              <div className="others-item__options">
                <div className="option">
                  <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => setToggle(!toggle)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <span>Emails</span>
                </div>
                <div className="option">
                  <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => setToggle(!toggle)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <span>Newletters</span>
                </div>
                <div className="option">
                  <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => setToggle(!toggle)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <span>Personalized notifications</span>
                </div>
              </div>
            </div>
            <div className="others-item">
              <div className="others-item__text">
                <h3>Language</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod?
                </p>
              </div>
              <div className="others-item__options">
                <div className="option">
                  {/* <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onClick={() => setToggle(!toggle)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div> */}
                  <div className="radio">
                    <input type="radio" name="radio"/>
                  </div>
                  <span>English</span>
                </div>
                <div className="option">
                  <div className="radio">
                    <input type="radio" name="radio"/>
                  </div>
                  <span>French</span>
                </div>
                <div className="option">
                  <div className="radio">
                    <input type="radio" name="radio"/>
                  </div>
                  <span>Arabic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings

{/* <div>
      <label className="switch">
        <input type="checkbox" onClick={() => setToggle(!toggle)} />
        <span className="slider round"></span>
      </label>
    </div> */}