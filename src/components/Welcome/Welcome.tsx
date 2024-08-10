import React from "react";
import Input from "../base/Input.tsx";
import Button from "../base/Button.tsx";
import { useNavigate } from "react-router-dom";
import { findUser } from "../../utils/common.js";

const Welcome = ({ userInfo, handleInput }) => {
  const navigate = useNavigate();
  const handleNextButton = () => {
    const { mobile, email } = userInfo;
    const isUserExist = findUser("email", email) || findUser("mobile", mobile);
    isUserExist ? navigate("/login") : navigate("/signup");
  };

  return (
    <div className="max-w-[400px] flex justify-center items-start flex-col gap-6">
      <h1 className="font-medium text-xl">Welcome</h1>
      <Input
        type="email"
        value={userInfo.email}
        label="Enter Email ID"
        onInputChange={(e) => handleInput(e)}
        placeholder="Loremipsum@gmail.com"
        inputStyle="mt-1"
        name="email"
      />
      <p className="text-gray-500 font-medium">(OR)</p>
      <Input
        type="number"
        value={userInfo.mobile}
        label="Enter Mobile No."
        onInputChange={(e) => handleInput(e)}
        placeholder="+91"
        inputStyle="mt-1"
        name="mobile"
      />
      <Button
        title="Next"
        onClick={() => handleNextButton()}
        buttonStyle="w-full bg-blue-500 text-slate-100"
      />
    </div>
  );
};

export default Welcome;
