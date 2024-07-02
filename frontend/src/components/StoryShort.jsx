import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import defaultProPic from "../assets/images/avatar_boy_cap.png";

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
        <div>
          <div className="w-80 text-color-white">
            <Swiper spaceBetween={10} slidesPerView={3}>
              <SwiperSlide>
                <div className="bg-color-blue h-40 rounded-lg relative">
                  <div className="bg-color-purple-light w-6 h-6 rounded-full overflow-hidden absolute top-1 left-1">
                    <img className="object-cover" src={defaultProPic} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-color-blue h-40 rounded-lg relative">
                  <div className="bg-color-purple-light w-6 h-6 rounded-full overflow-hidden absolute top-1 left-1">
                    <img className="object-cover" src={defaultProPic} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-color-blue h-40 rounded-lg relative">
                  <div className="bg-color-purple-light w-6 h-6 rounded-full overflow-hidden absolute top-1 left-1">
                    <img className="object-cover" src={defaultProPic} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-color-blue h-40 rounded-lg relative">
                  <div className="bg-color-purple-light w-6 h-6 rounded-full overflow-hidden absolute top-1 left-1">
                    <img className="object-cover" src={defaultProPic} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryShort;
