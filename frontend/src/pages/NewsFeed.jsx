import React, { useState } from "react";
import defaultProPic from "../assets/images/avatar_boy_cap.png";
import { useSelector } from "react-redux";
import { Camera } from "../assets/svg/Camera";
import Feelingicon from "../assets/svg/Feeling";
import { LiveIcon } from "../assets/svg/Live";
import ModalStatus from "../components/ModalStatus";

const NewsFeed = () => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  const [modal, setModal] = useState(false);

  const postOptionData = [
    {
      title: "Live",
      icon: LiveIcon,
      key: "live",
    },
    {
      title: "Photo/Video",
      icon: Camera,
      key: "photos",
    },
    {
      title: "Feeling/Activity",
      icon: Feelingicon,
      key: "feeling",
    },
  ];

  return (
    <>
      <div className="shadow-lg rounded-md p-3 font-grilroyRegular">
        <div className="flex gap-3 items-center pb-3">
          <div>
            <div className="w-10 h-10 rounded-full bg-color-purple-light mx-auto mb-2 overflow-hidden object-cover">
              <img
                src={userInfo.profilePic || defaultProPic}
                alt={userInfo.username || "Profile Picture"}
              />
            </div>
          </div>
          <div
            className="w-full bg-color-input p-3 pl-4 rounded-full cursor-pointer"
            onClick={() => setModal(true)}
          >
            <p className="m-0">{`What's on your mind, ${userInfo.lname}?`}</p>
          </div>
        </div>
        <div className="border-t border-color-border py-3 gap-4 grid grid-cols-3">
          {postOptionData?.map((item, i) => (
            <>
              <div
                key={i}
                className="flex justify-center gap-4 items-center hover:bg-color-input py-3 rounded-md uppercase font-grilroyMedium cursor-pointer"
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>{modal && <ModalStatus show={setModal} />}</div>
    </>
  );
};

export default NewsFeed;
