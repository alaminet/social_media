import React, { useRef, useState } from "react";
import { SearchIcon } from "../assets/svg/SearchIcon";
import useClickOutside from "../functions/click";

const SearchBox = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);
  useClickOutside(clickOutSide, () => setShow(false));
  const handleClick = () => {
    setShow(true);
    document.getElementById("inputfiled").focus();
  };

  return (
    <>
      <div className={`${show && "absolute right-2 z-10 sm:relative"}`}>
        <form action="">
          <div className="relative">
            {!show && (
              <div onClick={handleClick} className="absolute top-2 left-2">
                <SearchIcon />
              </div>
            )}
            <div>
              <input
                id="inputfiled"
                onClick={() => setShow(true)}
                className={`outline-none border rounded-full p-4 lg:py-2 sm:pl-10 lg:pr-2 w-10 h-10 sm:w-40 md:w-80 transition-all ease-linear duration-150 ${
                  show && "w-60 sm:pl-4 lg:border-0 shadow-lg"
                }`}
                type="text"
                placeholder="Search..."
              />
            </div>
            <div ref={clickOutSide}>
              {show && (
                <div className="absolute top-8 right-1 -z-10 w-60 sm:w-full max-h-80 pt-5 pb-3 pl-4 rounded-tl-3xl rounded-tr-3xl rounded-b-md shadow-lg">
                  Search list
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
