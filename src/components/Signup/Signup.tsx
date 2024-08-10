import React, { useState } from "react";
import Button from "../base/Button.tsx";
import { RegisterStep1, RegisterStep2 } from "./Steps.tsx";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/actions/userAction.js";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../icons/BackArrowIcon.tsx";
import ProgressBar from "../base/ProgressBar.tsx";

const Signup = ({ userInfo, handleInput, setSuccessMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // For handling signup next button
  const handleNextButton = () => {
    if (currentIndex === componentList.length - 1) {
      dispatch(registerUserAction(userInfo));
      navigate("/success");
      const message = {
        title: "Welcome to solvei8!",
        subTitle:
          "Redirecting you to login screen this might take a few second...",
        isRedirect: true,
      };
      setSuccessMessage(message);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // For handling signup back button
  const handleBackClick = () => {
    if (currentIndex >= 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Multistep components
  const componentList = [
    {
      id: 0,
      children: <RegisterStep1 userInfo={userInfo} handleInput={handleInput} />,
    },
    {
      id: 1,
      children: <RegisterStep2 userInfo={userInfo} handleInput={handleInput} />,
    },
  ];

  return (
    <div className="max-w-[400px] flex justify-center items-start flex-col gap-6">
      {currentIndex > 0 && currentIndex < componentList.length ? (
        <div
          className="text-blue-500 flex cursor-pointer"
          onClick={handleBackClick}
        >
          <BackArrowIcon className="w-6 h-6 mr-2" />
          <span>Go Back</span>
        </div>
      ) : null}

      {currentIndex < componentList.length ? (
        <h1 className="font-medium text-xl">Create Account</h1>
      ) : null}

      <div className="w-full flex gap-1">
        {componentList.map((_, i) => <ProgressBar key={i} isFilled={i <= currentIndex} />)}
      </div>

      {componentList[currentIndex].children}
      {currentIndex < componentList.length ? (
        <Button
          title="Next"
          onClick={handleNextButton}
          buttonStyle="w-full bg-blue-500 text-slate-100"
        />
      ) : null}
    </div>
  );
};

export default Signup;
