import React from "react";
import IconGroupOne from "./IconGroupOne";
import defaultProPic from "../assets/images/avatar_boy_cap.png";
import { NewsFeed } from "../assets/svg/NewsFeed";
import { Messages } from "../assets/svg/Messages";
import { Friends } from "../assets/svg/Friends";
import { Media } from "../assets/svg/Media";
import { Settings } from "../assets/svg/Settings";

const SidebarLeft = ({ user }) => {
  const data = [
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
      key: "settings",
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-center my-5">
          <div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-color-purple-light mx-auto mb-2 overflow-hidden object-cover">
                <img
                  src={user.profilePic || defaultProPic}
                  alt={user.username || "Profile Picture"}
                />
              </div>
              <p className="font-grilroyBold text-lg">
                {user.fname + " " + user.lname}
              </p>
              <p className="font-grilroyLight text-sm">{user.email}</p>
            </div>
            <div className="my-8">
              {data?.map((data, i) => (
                <IconGroupOne key={i} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
