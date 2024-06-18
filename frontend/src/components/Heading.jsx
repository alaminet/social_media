import React from "react";

const Heading = ({ title, className }) => {
  return (
    <div className={`${className} text-color-primary font-grilroyBlack`}>
      {title}
    </div>
  );
};

export default Heading;
