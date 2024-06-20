import React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { emailValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useResendOTPMutation } from "../features/api/authApi";

const initialState = {
  email: "",
};

const ResendOTP = () => {
  const navigate = useNavigate();
  const [resendOTP, { isLoading }] = useResendOTPMutation();

  const resend = async () => {
    await resendOTP({
      email: formik.values.email,
    })
      .then((response) => {
        // Success
        if (response?.data) {
          toast.success(response?.data?.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });
          setTimeout(() => {
            navigate(`/login`);
          }, 3000);
        }
        // error
        if (response?.error) {
          toast.error(response?.error?.data.message, {
            position: "bottom-center",
            autoClose: 1000,
            pauseOnHover: false,
          });
          if (response?.error?.data.message == "Email Verifyed, Try to login") {
            setTimeout(() => {
              navigate(`/login`);
            }, 3000);
          }
          if (response?.error?.data.message == "OTP Expaired") {
            setTimeout(() => {
              navigate(`/resendotp`);
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
    validationSchema: emailValid,
    onSubmit: (values) => {
      resend();
    },
  });
  const { errors } = formik;
  return (
    <>
      <div className="relative lg:overflow-hidden">
        <ToastContainer />
        <Helmet>
          <title>Resend OTP</title>
        </Helmet>
        <div className="hidden lg:block absolute w-[350px] h-[350px] bg-color-purple-light rounded-full -left-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-20 -bottom-20 -z-10"></div>
        <div className="container z-10">
          <div className="flex justify-center items-center lg:h-screen">
            <div className="flex gap-4">
              <div className="hidden md:block">
                <Heading
                  title="Resend New OTP !"
                  className="text-3xl text-center"
                />
                <RegistrationSVG className="w-96" />
              </div>

              <div>
                <div className="sm:w-80 text-color-black">
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      type="email"
                      placeholder="Enter you Email"
                      className=""
                      error={errors.email}
                      autocomplete="off"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />

                    <Button className="mt-6 mb-2 w-full" type="submit">
                      Send OTP
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

export default ResendOTP;
