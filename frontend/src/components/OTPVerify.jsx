import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { otpValid } from "../validation";
import { useForgotUserOTPMutation } from "../features/api/authApi";

const OTPVerify = ({ setVisible, user }) => {
  const initialState = {
    email: user?.email,
    otp: "",
  };
  const [otpVerify, { isLoading }] = useForgotUserOTPMutation();
  const otpCheck = async () => {
    await otpVerify({
      email: user?.email,
      otp: formik.values.otp,
    })
      .then((response) => {
        console.log(response);
        setVisible(3);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: otpValid,
    onSubmit: (values) => {
      otpCheck();
    },
  });
  const { errors } = formik;
  return (
    <>
      <div>
        <h6 className="font-grilroyMedium font-bold mb-3">Verify Your OTP</h6>
        <p className="text-sm">
          Check your email and verify the OTP to reset the password
        </p>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="otp"
            value={formik.values.otp}
            placeholder="Enter OTP"
            className="w-full outline-none border p-2 rounded-md border-color-border"
          />
          {errors && <p className="text-color-error text-xs">{errors.otp}</p>}

          <div className="flex gap-4 mt-4">
            <Link to="/login">
              <button className="px-3 py-2 bg-color-border rounded-md font-grilroyMedium shadow text-color-blue hover:bg-color-purple-light text-sm">
                Not received ?
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

export default OTPVerify;
