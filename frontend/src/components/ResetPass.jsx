import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { passwordValid } from "../validation";
import { useRestPassMutation } from "../features/api/authApi";

const ResetPass = ({ setVisible, user }) => {
  const navigate = useNavigate();
  const initialState = {
    email: user?.email,
    password: "",
  };
  const [resetPass, { isLoading }] = useRestPassMutation();
  const passUpdate = async () => {
    await resetPass({
      email: user?.email,
      password: formik.values.password,
    })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: passwordValid,
    onSubmit: (values) => {
      passUpdate();
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
            name="password"
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
