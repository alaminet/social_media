import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <button
      className={`${className} py-2 px-4 border border-color-transparent rounded-md text-md font-grilroySemiBold uppercase bg-color-primary text-color-white hover:bg-color-purple-light hover:text-color-primary hover:border-color-primary transition-all duration-300`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
