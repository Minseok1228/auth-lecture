import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutesLayout() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <Navigate to="/log-in" replace />;
  return <Outlet />;
}

export default PrivateRoutesLayout;
