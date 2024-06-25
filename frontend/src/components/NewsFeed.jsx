import React from "react";
import SearchBox from "./SearchBox";

const NewsFeed = () => {
  return (
    <>
      <div className="py-5">
        <div className="flex gap-4 justify-between">
          <div>Feeds</div>
          <div>
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
