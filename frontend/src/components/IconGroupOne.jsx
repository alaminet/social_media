import React from "react";
import { useNavigate } from "react-router-dom";

const IconGroupOne = ({ className, data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(data.key)}
        className={`${className} flex gap-3 hover:bg-color-blue hover:text-color-white py-3 px-5 rounded-lg hover:cursor-pointer transition-all duration-150 ease-linear text-color-blue my-2`}
      >
        <div>
          <data.icon />
        </div>
        <div>{data.title}</div>
      </div>
    </>
  );
};

export default IconGroupOne;
