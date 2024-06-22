import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);

  return <div>Home</div>;
};

export default Home;
