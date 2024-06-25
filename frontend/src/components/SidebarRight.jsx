import React from "react";
import FriendShort from "./FriendShort";
import StoryShort from "./StoryShort";

const SidebarRight = () => {
  return (
    <div>
      <div>
        <FriendShort data="" />
      </div>
      <div className="my-5">
        <StoryShort/>
      </div>
    </div>
  );
};

export default SidebarRight;
