import React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { signInValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useLoginUserMutation } from "../features/api/authApi";
import { useDispatch } from "react-redux";
import { Loginuser } from "../features/userSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const login = async () => {
    await loginUser({
      email: formik.values.email,
      password: formik.values.password,
    })
      .then((response) => {
        // Success
        if (response?.data) {
          dispatch(Loginuser(response?.data.userInfo));
          localStorage.setItem("user", JSON.stringify(response?.data.userInfo));
          toast.success(response?.data?.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });
          console.log(response?.data.userInfo);

          navigate("/");
        }
        // error
        if (response?.error.status === "FETCH_ERROR") {
          toast.error("Your Connection Is not stable", {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });
        }
        if (response?.error) {
          toast.error(response?.error?.data.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });

          if (response?.error?.data.message === "Account Not Verifyed") {
            setTimeout(() => {
              navigate(`/otp/${formik.values.email}`);
            }, 3000);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signInValid,
    onSubmit: (values) => {
      login();
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
                    <Link
                      className="text-color-primary block"
                      to="/forgotpassword"
                    >
                      Forgot Password ?
                    </Link>
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
