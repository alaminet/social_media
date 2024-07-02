import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../components/SidebarLeft";
import SearchBox from "../components/SearchBox";
import SidebarRight from "../components/SidebarRight";

const Home = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  const [state, setState] = useState();

  return (
    <>
      <div>
        <div className="grid gap-4 lg:grid-cols-[1fr,3fr,1fr] px-3">
          <div className="hidden lg:block">
            <SidebarLeft user={userInfo} state={setState} />
          </div>
          <div>
            <div className="py-5">
              <div className="lg:flex lg:gap-4 lg:justify-between">
                <div className="hidden lg:block capitalize font-grilroyMedium">
                  {state}
                </div>
                <div>
                  <SearchBox />
                </div>
              </div>
            </div>
            <Outlet />
          </div>
          <div className="hidden lg:block">
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
