import React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { otpValid } from "../validation";
import { Helmet } from "react-helmet-async";
import { useOtpVerifyMutation } from "../features/api/authApi";

const initialState = {
  otp: "",
};
const VerifyOTP = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [otpVerify, { isLoading }] = useOtpVerifyMutation();

  const verify = async () => {
    await otpVerify({
      email: params.email,
      otp: formik.values.otp,
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
    validationSchema: otpValid,
    onSubmit: (values) => {
      verify();
    },
  });
  const { errors } = formik;
  return (
    <>
      <div className="relative lg:overflow-hidden">
        <ToastContainer />
        <Helmet>
          <title>Verify OTP</title>
        </Helmet>
        <div className="hidden lg:block absolute w-[350px] h-[350px] bg-color-purple-light rounded-full -left-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-28 -top-28 -z-10"></div>
        <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-20 -bottom-20 -z-10"></div>
        <div className="container z-10">
          <div className="flex justify-center items-center lg:h-screen">
            <div className="flex gap-4">
              <div className="hidden md:block">
                <Heading
                  title="Verify your OTP !"
                  className="text-3xl text-center"
                />
                <RegistrationSVG className="w-96" />
              </div>

              <div>
                <div className="sm:w-80 text-color-black">
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      type="text"
                      placeholder="Enter you OTP"
                      className=""
                      error={errors.otp}
                      autocomplete="off"
                      name="otp"
                      onChange={formik.handleChange}
                      value={formik.values.otp}
                    />

                    <Button className="mt-6 mb-2 w-full" type="submit">
                      Verify
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

export default VerifyOTP;
