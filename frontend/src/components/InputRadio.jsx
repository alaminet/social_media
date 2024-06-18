import React from "react";

const InputRadio = ({ value, name }) => {
  return (
    <>
      <div>
        <input type="radio" value={value} name={name} /> {value}
      </div>
    </>
  );
};

export default InputRadio;
