import React from "react";
import Navi from "../../navi/Navi";

function AskQuestionLayout({ children, isAuthenticated }) {
  return (
    <div>
      <Navi isAuthenticated={isAuthenticated} />
      <div>{children}</div>
    </div>
  );
}

export default AskQuestionLayout;
