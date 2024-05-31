import React from "react";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="text-center p-4 border rounded shadow" style={{ maxWidth: "400px" }}>
        <h1 className="display-4 text-danger">Not Authorized</h1>
        <p className="lead">You do not have permission to view this page. Please sign in.</p>
        <Link to="/signin" className="btn btn-primary mt-3">Sign In</Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
