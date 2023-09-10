import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function PrivateRoute({ children }) {
  let move = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = localStorage.setItem("role", "user");
    if (!token && !user) {
      move("/login");
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
}

export default PrivateRoute;
