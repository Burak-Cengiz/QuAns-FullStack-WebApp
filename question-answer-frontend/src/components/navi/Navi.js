import React, { useState, useEffect } from "react";
import "../../css/styles/navbar.css";
import { SiAnswer } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import { GoInbox } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { IoIosHelpCircle } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navi = ({ isAuthenticated }) => {
  const [showSearch, setShowSearch] = useState(true);
  const [expandedForm, setExpandedForm] = useState(false);
  const navigate = useNavigate();
  const authState = useSelector((state) => state.authReducer);
  const userId = authState?.LoginInformations?.userId;

  const toggleSearch = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
    setExpandedForm((prevExpandedForm) => !prevExpandedForm);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 650) {
        setShowSearch(true);
        setExpandedForm(false);
      } else {
        setShowSearch(false);
        setExpandedForm(false);
      }
    };

    // Bileşen ilk yüklendiğinde bir kere çalıştır
    handleResize();

    // Pencere boyutu değiştiğinde handleResize fonksiyonunu çalıştır
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSignOut = () => {
    // Token'i local storage'dan kaldır
    localStorage.removeItem("token");
    // Ana sayfaya yönlendir
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <nav className="navv fixed-top">
        <div className="nav-container d-flex">
          <Link to="/" className="topbar d-flex hover">
            <span className="topbar-icon">
              <SiAnswer />
            </span>
            <span className="topbar-content">QuAns</span>
          </Link>
          <div className="nav-track d-flex align-items-center">
            <ul className="track-list d-flex align-items-center">
              <li className="track-list-item  hover">
                <Link href="#">Course</Link>
              </li>
              <li className="track-list-item  hover">
                <Link href="#">Exam</Link>
              </li>
            </ul>
          </div>
          <form
            id="search"
            role="search"
            className={`topbar-searchbar ${showSearch ? "d-flex" : "d-none"} ${
              expandedForm ? "form-expanded" : ""
            }`}
          >
            <div className="searchbar-input-group">
              <input
                type="text"
                placeholder="Search..."
                maxLength="240"
                className="searchbar-input"
              ></input>
              <IoIosSearch className="search-icon " />
            </div>
          </form>
          {isAuthenticated ? (
            <nav className="d-flex topbar-right-nav">
              <ol className="d-flex topbar-right">
                <li className="topbar-toggleSearch topbar-right-item ">
                  <button
                    className="form-search-button"
                    type="button"
                    aria-label="Search"
                    aria-haspopup="true"
                    title="Click to show search"
                    onClick={toggleSearch}
                  >
                    <IoIosSearch
                      aria-hidden="true"
                      className="text-white"
                    ></IoIosSearch>
                  </button>
                </li>
                <li className="topbar-right-item">
                  <Link
                    to={`/users/${userId}`}
                    className="topbar-right-item-usercard d-flex align-items-center"
                  >
                    <div className="usercard-avatar d-flex align-items-center">
                      <RxAvatar className="inbox" />
                    </div>
                    <div className="usercard-info d-flex align-items-center">
                      <ul className="usercard-info-list d-flex justify-content-between">
                        <li className="usercard-info-list-item">
                          <span className="usercard-reputation inbox-value">
                            1
                          </span>
                        </li>
                        <li className="usercard-info-list-item">
                          <span className="card-notice d-flex align-items-center">
                            <span>
                              <LuDot className="ludot inbox" />
                            </span>
                            <span className="usercard-notice inbox-value">
                              2
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>
                <li className="topbar-right-item">
                  <Link href="#">
                    <span className=" d-flex align-items-center">
                      <GoInbox className="inbox" />
                    </span>
                  </Link>
                </li>
                <li className="topbar-right-item">
                  <Link href="#">
                    <span className=" d-flex align-items-center">
                      <GiTrophyCup className="inbox" />
                    </span>
                  </Link>
                </li>
                <li className="topbar-right-item">
                  <Link href="#">
                    <span className=" d-flex align-items-center">
                      <IoIosHelpCircle className="inbox" />
                    </span>
                  </Link>
                </li>
                <li className="topbar-right-item">
                  <Link href="#">
                    <span className=" d-flex align-items-center">
                      <button
                        className="d-flex align-items-center hover"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    </span>
                  </Link>
                </li>
              </ol>
            </nav>
          ) : (
            <nav className="d-flex topbar-right-nav">
              <ol className="d-flex topbar-right">
                <li className="topbar-right-item"></li>
                <li className="topbar-right-item">
                  <button
                    className="d-flex align-items-center hover"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </button>
                </li>
                <li className="topbar-right-item">
                  <button
                    className="d-flex align-items-center hover"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </li>
              </ol>
            </nav>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navi;
