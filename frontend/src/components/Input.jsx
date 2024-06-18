import React from "react";

const Input = ({ type, className, placeholder, error }) => {
  return (
    <>
      <div className="my-6">
        <input
          type={type}
          className={`${className} outline-none w-full text-color-blue border-b-2 border-b-color-purple-light focus:border-b-color-purple`}
          placeholder={placeholder}
        />
        <p className="text-color-error text-xs">{error}</p>
      </div>
    </>
  );
};

export default Input;
