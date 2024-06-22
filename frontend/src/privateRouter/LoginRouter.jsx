import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const LoginRouter = () => {
    const { userInfo } = useSelector((user) => user.loginSlice);
  return userInfo ? <Outlet/> : <Login/>;
};

export default LoginRouter;
