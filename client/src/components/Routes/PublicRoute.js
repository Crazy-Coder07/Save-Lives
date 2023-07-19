import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/homepage" />;
  } else {
    return children;
  }
};

export default PublicRoute;
