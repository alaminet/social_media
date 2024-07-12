import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { emailValid } from "../validation";
import { useFindUserMutation } from "../features/api/authApi";

const initialState = {
  email: "",
};

const FindAccount = ({ setVisible, setUser }) => {
  const [error, setError] = useState();
  const [finduser, { isLoading }] = useFindUserMutation();
  const findUser = async () => {
    await finduser({
      email: formik.values.email,
    }).then((response) => {
      // Success
      if (response?.data) {
        setUser(response?.data.userInfo);
        setVisible(1);
      }
      // error
      if (response?.error.status === "FETCH_ERROR") {
        setError("Your Connection Is not stable");
      }
      if (response?.error) {
        setError(response?.error?.data.message);
      }
    });
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: emailValid,
    onSubmit: (values) => {
      findUser();
    },
  });
  const { errors } = formik;
  return (
    <>
      <div>
        <h6 className="font-grilroyMedium font-bold mb-3">Find Your Account</h6>
        <p className="text-sm">
          Please enter your email address or mobile number to find your account
        </p>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            value={formik.values.email}
            placeholder="Email Address"
            className="w-full outline-none border p-2 rounded-md border-color-border"
          />
          {errors && <p className="text-color-error text-xs">{errors.email}</p>}
          {error && <p className="text-color-error text-xs">{error}</p>}

          <div className="flex gap-4 mt-4">
            <Link to="/login">
              <button className="text-sm px-3 py-2 bg-color-border rounded-md font-grilroyMedium shadow text-color-blue hover:bg-color-purple-light">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="text-sm px-3 py-2 bg-color-blue rounded-md font-grilroyMedium shadow text-color-white hover:bg-color-input hover:text-color-blue transition-all duration-100 ease-linear"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindAccount;
