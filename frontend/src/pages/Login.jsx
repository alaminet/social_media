import React from "react";
import moment from "moment";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { signInValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useAddUserMutation } from "../features/api/authApi";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  // const baseURL = import.meta.env.VITE_BASE_URL;
  const [addUser, { isLoading }] = useAddUserMutation();

  const registration = async () => {
    const singUp = await addUser({
      fname: formik.values.fname,
      lname: formik.values.lname,
      email: formik.values.email,
      password: formik.values.password,
      gender: formik.values.gender,
      birthDate: moment(formik.values.birthDate).format(),
    })
      .then((response) => {
        response?.data &&
          toast.success(response?.data?.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });

        response?.error &&
          toast.error(response?.error?.data.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signInValid,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors } = formik;
  return (
    <>
      <div className="relative lg:overflow-hidden">
        <ToastContainer />
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="hidden lg:block absolute w-[350px] h-[350px] bg-color-purple-light rounded-full -left-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-20 -bottom-20 -z-10"></div>
        <div className="container z-10">
          <div className="flex justify-center items-center lg:h-screen">
            <div className="flex gap-4">
              <div className="hidden md:block">
                <Heading
                  title="Enter Your New World !"
                  className="text-3xl text-center"
                />
                <RegistrationSVG className="w-96" />
              </div>

              <div>
                <div className="sm:w-80 text-color-black">
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      type="email"
                      placeholder="Email"
                      className=""
                      error={errors.email}
                      autocomplete="off"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className=""
                      error={errors.password}
                      autocomplete="current-password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />

                    <Button className="mt-6 mb-2 w-full" type="submit">
                      Login
                    </Button>
                    <Link className="text-color-primary" to="/signup">
                      You don't have an account !
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
