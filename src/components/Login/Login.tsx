import React from "react";
import Input from "../base/Input.tsx";
import Button from "../base/Button.tsx";

const Login = ({ userInfo, handleInput, errorMessage, handleLogin }) => {
  
  return (
    <div className="max-w-[300px] flex justify-center items-start flex-col gap-6">
      <h1 className="font-medium text-xl">Welcome Back,John!</h1>
      <Input
        type="email"
        value={userInfo.email}
        label="Enter Email ID"
        onInputChange={(e) => handleInput(e)}
        placeholder="Loremipsum@gmail.com"
        inputStyle="mt-1"
        name="email"
      />
      <Input
        type="text"
        value={userInfo.password}
        label="Enter Password"
        onInputChange={(e) => handleInput(e)}
        placeholder="Password"
        inputStyle="mt-1"
        name="password"
        errorMessage={errorMessage}
      />
      <Button
        title="Next"
        onClick={handleLogin}
        buttonStyle="w-full bg-blue-500 text-slate-100"
      />
    </div>
  );
};

export default Login;
