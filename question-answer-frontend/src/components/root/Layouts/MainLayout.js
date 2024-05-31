import React from "react";
import Navi from "../../navi/Navi";
import Leftsidebar from "../../sidebar/Leftsidebar";
import Footer from "../../footer/Footer";

function MainLayout({ children, isAuthenticated }) {
  return (
    <div>
      <Navi isAuthenticated={isAuthenticated} />
      <Leftsidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
