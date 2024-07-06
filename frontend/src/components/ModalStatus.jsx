import React from "react";
import defaultProPic from "../assets/images/avatar_boy_cap.png";
import { CircleCloseIcon } from "../assets/svg/CircleClose";
import { Media } from "../assets/svg/Media";
import { FaCaretDown, FaGlobeAsia } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LiveIcon } from "../assets/svg/Live";
import { Camera } from "../assets/svg/Camera";

const ModalStatus = ({ show }) => {
  const { userInfo } = useSelector((user) => user.loginSlice);
  return (
    <>
      <div className="fixed top-0 left-0 bg-[#000000ba] w-full h-screen z-20 flex justify-center items-center font-grilroyRegular">
        <form className="bg-color-input w-[35%] rounded-md p-4" action="">
          <div>
            <div className="flex justify-between pb-4">
              <div className="font-semibold">Create Post</div>
              <div onClick={() => show(false)} className="cursor-pointer">
                <CircleCloseIcon />
              </div>
            </div>
            <div className="flex gap-4 items-center border-t pt-4 border-color-border">
              <div>
                <div className="w-10 h-10 rounded-full bg-color-purple-light mx-auto mb-2 overflow-hidden object-cover">
                  <img
                    src={userInfo.profilePic || defaultProPic}
                    alt={userInfo.username || "Profile Picture"}
                  />
                </div>
              </div>
              <div>
                <div className="font-grilroySemiBold">
                  {userInfo.fname + " " + userInfo.lname}
                </div>
                <div className="px-2 py-1 bg-color-border rounded-md flex items-center gap-2 text-sm">
                  <FaGlobeAsia />
                  <div>
                    <select
                      className="outline-none bg-color-transparent font-grilroyMedium"
                      name="postFor"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends</option>
                      <option value="onlyMe">Only Me</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-4">
                <textarea
                  className="w-full outline-none p-3 font-grilroyRegular rounded"
                  name="status"
                  rows="4"
                  placeholder={`What's on your mind, ${userInfo.lname}?`}
                ></textarea>
              </div>
            </div>
            <div>
              <div className="flex justify-between py-4">
                <div className="font-grilroySemiBold">Add your posts</div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center hover:bg-color-border rounded cursor-pointer transition-all ease-linear duration-100 p-1">
                    <Camera />
                  </div>
                  <div className="flex justify-center items-center hover:bg-color-border rounded cursor-pointer transition-all ease-linear duration-100 p-1">
                    <Media />
                  </div>
                  <div className="flex justify-center items-center hover:bg-color-border rounded cursor-pointer transition-all ease-linear duration-100 p-1">
                    <LiveIcon />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-color-blue text-color-white py-2 rounded-md font-grilroyMedium font-medium uppercase"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalStatus;
