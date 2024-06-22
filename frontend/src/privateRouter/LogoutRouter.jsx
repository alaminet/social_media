import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LogoutRouter = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  return userInfo ? <Navigate to="/" /> : <Outlet />;
};

export default LogoutRouter;
