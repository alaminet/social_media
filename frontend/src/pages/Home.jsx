import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../components/SidebarLeft";

const Home = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);

  return (
    <>
      <div>
        <div className="grid gap-4 grid-cols-[1fr,3fr,1fr] px-3">
          <div>
            <SidebarLeft user={userInfo} />
          </div>
          <div>
            <Outlet/>
          </div>
          <div>right</div>
        </div>
      </div>
    </>
  );
};

export default Home;
