import React, { useRef, useState } from "react";
import SearchBox from "./SearchBox";
import OutSideClick from "../functions/click";

const NewsFeed = () => {
  return (
    <>
      <div className="py-5">
        <div className="flex gap-4 justify-between">
          <div>Feed</div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
