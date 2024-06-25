import React from "react";

const StoryShort = () => {
  return (
    <>
      <div>
        <div className="flex justify-between pt-5 pb-2 items-center">
          <div className="font-grilroyBold">Story</div>
          <button className="text-color-white hover:text-color-blue bg-color-blue hover:bg-color-transparent py-2 px-3 rounded-full hover:cursor-pointer transition-all duration-150 ease-linear my-2 uppercase border font-grilroySemiBold text-xs">
            view all
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryShort;
