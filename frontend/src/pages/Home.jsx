import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import SidebarLeft from "../components/SidebarLeft";
import SearchBox from "../components/SearchBox";
import SidebarRight from "../components/SidebarRight";
import defaultProPic from "../assets/images/avatar_boy_cap.png";
import { Messages } from "../assets/svg/Messages";
import { Friends } from "../assets/svg/Friends";
import { NewsFeed } from "../assets/svg/NewsFeed";
import { Media } from "../assets/svg/Media";
import { Settings } from "../assets/svg/Settings";

const Home = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  const [state, setState] = useState();

  const menuData = [
    {
      title: "News Feed",
      icon: NewsFeed,
      key: "newsfeed",
    },
    {
      title: "Message",
      icon: Messages,
      key: "message",
    },
    {
      title: "Friends",
      icon: Friends,
      key: "friends",
    },
    {
      title: "Media",
      icon: Media,
      key: "media",
    },
    {
      title: "Settings",
      icon: Settings,
    },
  ];

  return (
    <>
      <div>
        <div className="grid gap-4 lg:grid-cols-[1fr,3fr,1fr] px-3">
          <div className="hidden lg:block">
            <SidebarLeft user={userInfo} state={setState} />
          </div>
          <div>
            <div className="py-5">
              <div className="flex gap-4 justify-between">
                <div className="hidden lg:block capitalize font-grilroyMedium">
                  {state}
                </div>
                <div className="lg:hidden">
                  <div className="w-10 h-10 rounded-full bg-color-purple-light mx-auto mb-2 overflow-hidden object-cover">
                    <img
                      src={userInfo.profilePic || defaultProPic}
                      alt={userInfo.username || "Profile Picture"}
                    />
                  </div>
                </div>
                <div className="lg:hidden flex gap-1 justify-center items-center">
                  {menuData?.map((item, i) => (
                    <Link to={item.key}>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-color-blue hover:text-color-white text-sm">
                        <item.icon />
                      </div>
                    </Link>
                  ))}
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
