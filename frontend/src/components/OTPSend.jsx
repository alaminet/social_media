import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { emailValid } from "../validation";
import defaultProPic from "../assets/images/avatar_boy_cap.png";
import { useResendOTPMutation } from "../features/api/authApi";

const OTPSend = ({ setVisible, user }) => {
  const [error, setError] = useState();
  const initialState = {
    email: user?.email,
  };
  const [otpapi, { isLoading }] = useResendOTPMutation();
  const otpSend = async () => {
    await otpapi({
      email: formik.values.email,
    })
      .then((response) => {
        console.log(response);
        setVisible(2);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: emailValid,
    onSubmit: (values) => {
      otpSend();
    },
  });

  return (
    <>
      <div>
        <h6 className="font-grilroyMedium font-bold mb-3">Reset Password ?</h6>
        <p className="text-sm">
          Make sure it's yours! After continuing an OTP need to verify.
        </p>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          <div className="flex justify-between items-center">
            <div>
              <input type="radio" defaultChecked={true} />
              <span className="ml-1">{user?.email}</span>
            </div>
            <div>
              <div className="w-14 h-14 bg-color-purple-light rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={defaultProPic || user?.profilePic}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Link to="/login">
              <button className="px-3 py-2 bg-color-border rounded-md font-grilroyMedium shadow text-color-blue hover:bg-color-purple-light text-sm">
                Not You ?
              </button>
            </Link>
            <button
              type="submit"
              className="px-3 py-2 bg-color-blue rounded-md font-grilroyMedium shadow text-color-white hover:bg-color-input hover:text-color-blue transition-all duration-100 ease-linear text-sm"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OTPSend;
