import React from "react";
import { Formik, useFormik } from "formik";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import InputRadio from "../components/InputRadio";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { signUpValid } from "../validation";
import { Helmet } from "react-helmet-async";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  gender: "",
  birthDate: "",
};

const Registration = () => {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUpValid,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors } = formik;
  return (
    <div className="relative lg:overflow-hidden">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="hidden lg:block absolute w-[350px] h-[350px] bg-color-purple-light rounded-full -left-28 -top-28 -z-10"></div>
      <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-28 -top-28 -z-10"></div>
      <div className="hidden lg:block absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-20 -bottom-20 -z-10"></div>
      <div className="container z-10">
        <div className="flex justify-center items-center lg:h-screen">
          <div className="flex gap-4">
            <div className="hidden md:block">
              <Heading
                title="Start Your Journey"
                className="text-3xl text-center"
              />
              <RegistrationSVG className="w-96" />
            </div>

            <div>
              <div className="sm:w-80 text-color-black">
                <form onSubmit={formik.handleSubmit}>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className=""
                    error={errors.fname}
                    autocomplete="off"
                    name="fname"
                    onChange={formik.handleChange}
                    value={formik.values.fname}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className=""
                    error={errors.lname}
                    autocomplete="off"
                    name="lname"
                    onChange={formik.handleChange}
                    value={formik.values.lname}
                  />
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
                  <div className="flex gap-4 items-center">
                    <label>Birthday: </label>
                    <Input
                      className="w-full"
                      type="date"
                      autocomplete="off"
                      error={errors.birthDate}
                      name="birthDate"
                      onChange={formik.handleChange}
                      value={formik.values.birthDate}
                    />
                  </div>
                  <div className="flex gap-4">
                    <InputRadio
                      name="gender"
                      value="Male"
                      autocomplete="off"
                      onChange={formik.handleChange}
                    />
                    <InputRadio
                      name="gender"
                      value="Female"
                      autocomplete="off"
                      onChange={formik.handleChange}
                    />
                    <InputRadio
                      name="gender"
                      value="Others"
                      autocomplete="off"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <Button className="mt-6 mb-2 w-full" type="submit">
                    Submit
                  </Button>
                  <Link className="text-color-primary" to="#">
                    Already have an account !
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
