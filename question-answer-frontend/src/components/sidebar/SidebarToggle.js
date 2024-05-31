import React, { Component } from "react";
import { IoMdMenu } from "react-icons/io";
import Leftsidebar from "./Leftsidebar";

export default class SidebarToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleSidebar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <IoMdMenu onClick={this.toggleSidebar} />
        <Leftsidebar isVisible={this.state.isOpen} /> {/* Burada Leftsidebar'ı bu şekilde çağırın */}
      </div>
    );
  }
}
