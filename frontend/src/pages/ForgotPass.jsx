import React from "react";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-bg-purple-100 to-bg-pink-100 via-bg-cyan-100">
        <div className="w-80 shadow-lg p-4 rounded">
          <h6 className="font-grilroyMedium font-bold mb-3">
            Find Your Account
          </h6>
          <p className="text-sm">
            Please enter your email address or mobile number to find your
            account
          </p>
          <form className="my-4" action="">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none border p-2 rounded-md border-color-border"
            />
            <div className="flex gap-4 mt-4">
              <Link to="/login">
                <button className="px-3 py-2 bg-color-border rounded-md font-grilroyMedium shadow text-color-blue hover:bg-color-purple-light">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="px-3 py-2 bg-color-blue rounded-md font-grilroyMedium shadow text-color-white hover:bg-color-input hover:text-color-blue transition-all duration-100 ease-linear"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
