import React from "react";
import "../../css/styles/sidebar/sidebar.css";
import { IoMdHome } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaMeta } from "react-icons/fa6";

const Rightsidebar = () => {
  return (
    <div className="d-flex r-div">
      <ul className="sidebar right-sidebar">
        <li className="right-header">
          <span></span>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <IoPencilSharp className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <IoPencilSharp className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li className="right-header">
          <span></span>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <IoChatbubbleOutline className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <IoChatbubbleOutline className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <FaMeta className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li className="right-item d-flex">
          <div>
            <span className="r-icon">
              <FaMeta className="r-icon-io"/>
            </span>
          </div>
          <div>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Rightsidebar;
