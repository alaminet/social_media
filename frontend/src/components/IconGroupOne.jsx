import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon } from "../assets/svg/Moon";
import { BackIcon } from "../assets/svg/backIcon";
import { Logout } from "../assets/svg/Logout";
import SunIcon from "../assets/svg/SunIcon";
import { useDispatch } from "react-redux";
import { logOutUser } from "../features/userSlice";

const IconGroupOne = ({ className, data, Sidestate }) => {
  const [option, setOption] = useState(false);
  const [subOption, setSubOption] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOption = (e) => {
    navigate(e.key || "#");
    setOption(!option);
    Sidestate(e.key);
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logOutUser());
    navigate("/login");
  };

  const settingSeperation = data.title === "Settings" && (
    <>
      <div
        onClick={() => setOption(!option)}
        className={`${className} flex gap-3 items-center hover:bg-color-blue hover:text-color-white py-3 px-5 rounded-lg hover:cursor-pointer transition-all duration-150 ease-linear text-color-blue my-2 ${
          option && "text-color-white bg-color-blue"
        }`}
      >
        <div>
          <data.icon />
        </div>
        <div className="hidden lg:block">{data.title}</div>
      </div>
      {option && (
        <div>
          <div
            onClick={() => setSubOption(!subOption)}
            className={`flex gap-3 items-center hover:bg-color-blue text-sm hover:text-color-white py-3 px-5 rounded-lg hover:cursor-pointer transition-all duration-150 ease-linear text-color-blue my-2 ${
              subOption && "text-color-white bg-color-blue"
            }`}
          >
            <div>{subOption ? <BackIcon /> : <Moon />}</div>
            <div className="hidden lg:block">Display & Mode</div>
          </div>
          {subOption && (
            <>
              <div className="flex gap-2 justify-end items-center rounded-lg text-color-blue my-2">
                <div
                  onClick={() => setDark(true)}
                  className={`flex gap-2 items-center p-2 rounded-lg my-2 hover:bg-color-blue hover:text-color-white hover:cursor-pointer transition-all duration-150 ease-linear ${
                    dark && "text-color-white bg-color-blue"
                  }`}
                >
                  <div>
                    <Moon />
                  </div>
                  <div>Dark</div>
                </div>
                <div
                  onClick={() => setDark(false)}
                  className={`flex gap-2 items-center p-2 rounded-lg my-2 hover:bg-color-blue hover:text-color-white hover:cursor-pointer transition-all duration-150 ease-linear ${
                    !dark && "text-color-white bg-color-blue"
                  }`}
                >
                  <div>
                    <SunIcon fill="white" />
                  </div>
                  <div>Light</div>
                </div>
              </div>
            </>
          )}
          <div
            onClick={() => handleLogOut()}
            className={`flex gap-3 items-center hover:bg-color-blue hover:text-color-white py-3 px-5 rounded-lg hover:cursor-pointer transition-all duration-150 ease-linear text-color-blue my-2`}
          >
            <div>
              <Logout />
            </div>
            <div className="hidden lg:block">Logout</div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <div>
        {settingSeperation ? (
          settingSeperation
        ) : (
          <div
            onClick={() => handleOption(data)} //navigate(data.key || "#")
            className={`${className} flex gap-3 items-center hover:bg-color-blue hover:text-color-white py-3 px-5 rounded-lg hover:cursor-pointer transition-all duration-150 ease-linear text-color-blue my-2 `}
          >
            <div>
              <data.icon />
            </div>
            <div className="hidden lg:block">{data.title}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default IconGroupOne;
