import React from "react";
import Heading from "../components/Heading";
import RegistrationSVG from "../assets/svg/RegistrationSVG";
import Input from "../components/Input";
import InputRadio from "../components/InputRadio";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Registration = () => {
  const initialvalues = useforkmik;
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-[350px] h-[350px] bg-color-purple-light rounded-full -left-28 -top-28 "></div>
      <div className="absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-28 -top-28 "></div>
      <div className="absolute w-[200px] h-[200px] bg-color-purple-light rounded-full -right-20 -bottom-20 "></div>
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="flex gap-4">
            <div>
              <Heading
                title="Start Your Journey"
                className="text-3xl text-center"
              />
              <RegistrationSVG className="w-96" />
            </div>

            <div>
              <div className="w-80 text-color-black">
                <form onSubmit={onSubmitFinished}>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className=""
                    error=""
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className=""
                    error=""
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className=""
                    error=""
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className=""
                    error=""
                  />
                  <div className="flex gap-4 items-center">
                    <label>Birthday: </label>
                    <Input
                      className="w-full"
                      type="date"
                      id="birthday"
                      name="birthday"
                    ></Input>
                  </div>
                  <div className="flex gap-4">
                    <InputRadio name="gender" value="Male" />
                    <InputRadio name="gender" value="Female" />
                    <InputRadio name="gender" value="Others" />
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
