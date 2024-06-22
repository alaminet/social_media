import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((user) => user.loginSlice.userInfo);

  console.log(user);
  return <div>Home</div>;
};

export default Home;
