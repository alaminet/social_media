import React from "react";

const Input = ({
  type,
  className,
  placeholder,
  error,
  onChange,
  value,
  name,
  autocomplete,
}) => {
  return (
    <>
      <div className="my-6">
        <input
          onChange={onChange}
          type={type}
          value={value}
          name={name}
          autoComplete={autocomplete}
          className={`${className} outline-none w-full text-color-blue border-b-2 border-b-color-purple-light focus:border-b-color-purple p-2 rounded-sm`}
          placeholder={placeholder}
        />
        <p className="text-color-error text-xs ml-2">{error}</p>
      </div>
    </>
  );
};

export default Input;
