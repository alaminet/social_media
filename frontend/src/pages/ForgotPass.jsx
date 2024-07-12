import React, { useState } from "react";
import FindAccount from "../components/FindAccount";
import OTPSend from "../components/OTPSend";
import OTPVerify from "../components/OTPVerify";
import ResetPass from "../components/ResetPass";

const ForgotPass = () => {
  const [visible, setVisible] = useState(0);
  const [user, setUser] = useState();
  console.log(user);
  const renderComponents = () => {
    switch (visible) {
      case 0:
        return <FindAccount setVisible={setVisible} setUser={setUser} />;
      case 1:
        return <OTPSend  setVisible={setVisible} user={user}/>;
      case 2:
        return <OTPVerify />;
      case 3:
        return <ResetPass />;
      default:
        null;
    }
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-bg-purple-100 to-bg-pink-100 via-bg-cyan-100">
        <div className="w-80 shadow-lg p-4 rounded">{renderComponents()}</div>
      </div>
    </>
  );
};

export default ForgotPass;
