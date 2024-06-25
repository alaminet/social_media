import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../components/SidebarLeft";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  const [state, setState] = useState();

  return (
    <>
      <div>
        <div className="grid gap-4 grid-cols-[1fr,3fr,1fr] px-3">
          <div>
            <SidebarLeft user={userInfo} state={setState} />
          </div>
          <div>
            <div className="py-5">
              <div className="flex gap-4 justify-between">
                <div className="capitalize font-grilroyMedium">{state}</div>
                <div>
                  <SearchBox />
                </div>
              </div>
            </div>
            <Outlet />
          </div>
          <div>right</div>
        </div>
      </div>
    </>
  );
};

export default Home;
