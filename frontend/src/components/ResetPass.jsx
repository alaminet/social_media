import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { passwordValid } from "../validation";

const ResetPass = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: passwordValid,
    onSubmit: (values) => {
      console.log("Subimt");
    },
  });
  const { errors } = formik;
  return (
    <>
      <div>
        <h6 className="font-grilroyMedium font-bold mb-3">
          Reset Your Password
        </h6>
        <p className="text-sm">
          Input your storng password and don't forget again !
        </p>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="otp"
            value={formik.values.password}
            placeholder="Enter New Password"
            className="w-full outline-none border p-2 rounded-md border-color-border"
          />
          {errors && (
            <p className="text-color-error text-xs">{errors.password}</p>
          )}

          <div className="flex gap-4 mt-4">
            <Link to="/login">
              <button className="px-3 py-2 bg-color-border rounded-md font-grilroyMedium shadow text-color-blue hover:bg-color-purple-light text-sm">
                Remember ?
              </button>
            </Link>
            <button
              type="submit"
              className="px-3 py-2 bg-color-blue rounded-md font-grilroyMedium shadow text-color-white hover:bg-color-input hover:text-color-blue transition-all duration-100 ease-linear text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPass;
