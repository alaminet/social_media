import React from "react";

const InputRadio = ({ value, name, onChange }) => {
  return (
    <>
      <div>
        <input onChange={onChange} type="radio" value={value} name={name} />{" "}
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </div>
    </>
  );
};

export default InputRadio;
