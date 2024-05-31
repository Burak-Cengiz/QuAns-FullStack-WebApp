import React, { Component } from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import "../../css/styles/sidebar/sidebar.css";
import { IoMdHome } from "react-icons/io";
import $ from "jquery";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa";
import { GiMechanicalArm } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

export default class Leftsidebar extends Component {
  componentDidMount() {
    $(document).ready(function ($) {
      var leftsidebar = $("#left-sidebar");
  
      function updateSidebarPosition() {
        var footerTop = $("footer").offset().top;
        var sidebarHeight = leftsidebar.outerHeight();
        var stopPoint = footerTop - sidebarHeight - 54;
  
        if ($(window).scrollTop() >= stopPoint) {
          leftsidebar.css({
            position: "absolute",
            top: stopPoint + 54 + "px",
          });
        } else {
          leftsidebar.css({
            position: "fixed",
            top: "56px",
          });
        }
      }
  
      // Initial call to set up the sidebar position
      updateSidebarPosition();
  
      // Update sidebar position on scroll using requestAnimationFrame
      var isScrolling = false;
      $(window).on("scroll.updateSidebar", function () {
        if (!isScrolling) {
          isScrolling = true;
          window.requestAnimationFrame(function () {
            updateSidebarPosition();
            isScrolling = false;
          });
        }
      });
  
      // Update sidebar position on window resize
      $(window).on("resize.updateSidebar", function () {
        updateSidebarPosition();
      });
  
      // Save the event handler functions to remove them later
      this.updateSidebarPosition = updateSidebarPosition;
      this.isScrolling = isScrolling;
    }.bind(this));
  }
  
  componentWillUnmount() {
    $(window).off("scroll.updateSidebar");
    $(window).off("resize.updateSidebar");
  }
  
  render() {
    return (
      <div>
        <div className="sidebar left-sidebar" id="left-sidebar">
          <ul className="nav">
            <li>
              <Link to="#">
                <div className="d-flex">
                  <IoMdHome className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="d-flex">
                  <AiFillAliwangwang className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Questions</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="d-flex">
                  <HiUsers className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Users</span>
                </div>
              </Link>
            </li>
            <li className="pb24"></li>
            <li>
              <Link to="#">
                <div className="d-flex">
                  <FaDatabase className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Database</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="d-flex">
                  <FaNetworkWired className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Networking</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="d-flex">
                  <GiMechanicalArm className="left-sidebar-icon" />
                  <span className="left-sidebar-content">Mechanical</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="sidebar-survey">
            <Link
              to="#"
              className="d-flex justify-content-between align-items-center mb-2"
            >
              <h5>Quick Survey</h5>
              <IoIosAdd className="IoIoAdd" />
            </Link>
            <form>
              <label>
                Which feature would you like to see next?
                <div className="custom-select-wrapper">
                  <select
                    name="features"
                    className="custom-select"
                    defaultValue=""
                  >
                    <option value="" disabled hidden></option>
                    <option value="dark-mode">Dark Mode</option>
                    <option value="notifications">Notifications</option>
                    <option value="new-layout">New Layout</option>
                  </select>
                </div>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
