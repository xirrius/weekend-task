import { Link, NavLink, Outlet } from "react-router-dom";
import { Globe } from "lucide-react";
import "./navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [profDropdown, setprofDropdown] = useState(false); // Controls visibility
  const [showProfDropdown, setShowProfDropdown] = useState(false); // Controls presence in DOM
  const [langDropdown, setlangDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    if (profDropdown) setShowProfDropdown(true);
  }, [profDropdown]);

  useEffect(() => {
    if (langDropdown) setShowLangDropdown(true);
  }, [langDropdown]);

  const handleAnimationEnd = (type) => {
    if (type === "profDropdown" && !profDropdown) setShowProfDropdown(false);
    if (type === "langDropdown" && !langDropdown) setShowLangDropdown(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="./img/logo-black.svg" alt="" />
          </div>
          <div className="nav-links">
            <div className="links">
              <NavLink to={"/"} className="link-item large">
                <p>Dashboard</p>
              </NavLink>
              <NavLink to={"/my-favourites"} className="link-item large">
                <p>My Favourites</p>
              </NavLink>
              <NavLink to={"/upcoming-events"} className="link-item large">
                <p>Upcoming Events</p>
              </NavLink>
            </div>
            <div className="icons">
              <div className="bell">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C10.343 2 9 3.343 9 5V6.059C7.275 6.559 6 8.134 6 10V15L4 17V18H20V17L18 15V10C18 8.134 16.725 6.559 15 6.059V5C15 3.343 13.657 2 12 2ZM12 22C13.105 22 14 21.105 14 20H10C10 21.105 10.895 22 12 22Z"
                    fill="#B7B5B2"
                  />

                  <circle cx="18" cy="6" r="3" fill="#B79535" />
                </svg>
              </div>
              <div
                className="menu"
                onMouseOver={() => setprofDropdown(true)}
                onMouseOut={() => setprofDropdown(false)}
              >
                <div className="menu-icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 28 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="2"
                      rx="1"
                      ry="1"
                      fill="#222222"
                    />
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="2"
                      rx="1"
                      ry="1"
                      fill="#222222"
                    />
                    <rect
                      x="3"
                      y="16"
                      width="18"
                      height="2"
                      rx="1"
                      ry="1"
                      fill="#222222"
                    />
                  </svg>
                </div>
                <div className="profile">C</div>
                {showProfDropdown && (
                  <div
                    className={`dropdown prof-dropdown ${
                      profDropdown ? "show-dropdown" : "hide-dropdown"
                    }`}
                    onAnimationEnd={() => handleAnimationEnd("profDropdown")}
                  >
                    <Link to={"/"} className="link-item mobile">
                      Dashboard
                    </Link>
                    <Link to={"/my-favourites"} className="link-item mobile">
                      My Favourites
                    </Link>
                    <Link to={"/upcoming-events"} className="link-item mobile">
                      Upcoming Events
                    </Link>
                    <div className="divider mobile"></div>
                    <Link to={"/edit-profile"} className="link-item">
                      Edit Profile
                    </Link>
                    <Link to={"/feedback"} className="link-item">
                      Feedback
                    </Link>
                    <Link to={"/settings"} className="link-item">
                      Settings
                    </Link>
                  </div>
                )}
              </div>
              <div className="language">
                <Globe
                  style={{ width: "20px" }}
                  onMouseOver={() => setlangDropdown(true)}
                  onMouseOut={() => setlangDropdown(false)}
                />
                {showLangDropdown && (
                  <div
                    className={`dropdown lang-dropdown ${
                      langDropdown ? "show-dropdown" : "hide-dropdown"
                    }`}
                    onMouseOver={() => setlangDropdown(true)}
                    onMouseOut={() => setlangDropdown(false)}
                    onAnimationEnd={() => handleAnimationEnd("langDropdown")}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#FF385C",
                      }}
                      className="link-item"
                    >
                      English
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF385C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="link-item">French</span>
                    <span className="link-item">Arabic</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
      <div className="footer">
        <div className="container">
          <p>Copyright © Neom Sindalah. All Rights Reserved.</p>
          <div>
            <Link to={"#"} className="footer-links">
              Terms of Use
            </Link>
            <Link to={"#"} className="footer-links">
              Privacy
            </Link>
            <Link to={"#"} className="footer-links">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
