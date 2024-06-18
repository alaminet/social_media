import React from "react";

const InputRadio = ({ value, name, onChange }) => {
  return (
    <>
      <div>
        <input onChange={onChange} type="radio" value={value} name={name} />{" "}
        {value}
      </div>
    </>
  );
};

export default InputRadio;
