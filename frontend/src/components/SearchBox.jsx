import React, { useRef, useState } from "react";
import { SearchIcon } from "../assets/svg/SearchIcon";
import useClickOutside from "../functions/click";

const SearchBox = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);
  useClickOutside(clickOutSide, () => setShow(false));

  return (
    <>
      <div>
        <form action="">
          <div className="relative">
            {!show && (
              <div className="absolute top-2 left-2">
                <SearchIcon />
              </div>
            )}
            <div>
              <input
                onClick={() => setShow(true)}
                className={`outline-none border rounded-full py-2 pl-10 pr-2 w-80 transition-all ease-linear duration-150 ${
                  show && "pl-4 border-0 shadow-lg"
                }`}
                type="text"
                placeholder="Search..."
              />
            </div>
            {show && (
              <div
                ref={clickOutSide}
                className={`opacity-0 top-0 -z-10 w-full max-h-80 pt-5 pb-3 pl-4 rounded-tl-3xl rounded-tr-3xl rounded-b-md transition-all ease-linear duration-200 shadow-lg ${
                  show && "opacity-100"
                }`}
              >
                Search box
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
