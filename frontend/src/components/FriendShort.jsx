import React from "react";
import defaultProPic from "../assets/images/avatar_boy_cap.png";

const FriendShort = ({ data }) => {
  return (
    <>
      <div className="flex justify-between pt-5 pb-2 items-center">
        <div className="font-grilroyBold">Friends</div>
        <button className="text-color-white hover:text-color-blue bg-color-blue hover:bg-color-transparent py-2 px-3 rounded-full hover:cursor-pointer transition-all duration-150 ease-linear my-2 uppercase border font-grilroySemiBold text-xs">
          view all
        </button>
      </div>
      <div>
        <div className="grid gap-1 grid-cols-[1fr,3fr,1fr] items-center border-b pb-2 mt-2 border-color-border">
          <div>
            <div className="w-10 h-10 rounded-full bg-color-purple-light overflow-hidden">
              <img className="object-cover " src={defaultProPic} alt="" />
            </div>
          </div>
          <div>
            <p className="text-sm font-grilroyMedium">
              {"Friends Name gose to here".length > 15
                ? "Friends Name gose to here".substring(0, 11)
                : "not 15"}
            </p>
            <p className="text-xs font-grilroyLight">10 minute ago</p>
          </div>
          <div className="flex gap-1">
            <button className="text-color-white hover:text-color-blue bg-color-blue hover:bg-color-transparent py-2 px-3 rounded-full hover:cursor-pointer transition-all duration-150 ease-linear uppercase border font-grilroySemiBold text-xs">
              Accept
            </button>
            <button className="text-color-white hover:text-color-blue bg-color-error hover:bg-color-transparent py-1 px-3 rounded-full hover:cursor-pointer transition-all duration-150 ease-linear uppercase border font-grilroySemiBold text-xs">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendShort;
