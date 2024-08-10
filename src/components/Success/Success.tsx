import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { REDIRECT_TIME } from "../../constants/data.js";
import TickIcon from "../icons/TickIcon.tsx";

interface SuccessProps {
  title: string;
  subTitle: string;
  isRedirect: boolean;
}

const Success = ({ title, subTitle, isRedirect }: SuccessProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRedirect) {
      timerRef.current = setTimeout(() => {
        navigate("/login");
      }, REDIRECT_TIME);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isRedirect, navigate]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-2">
      <div className="w-28 h-28 rounded-full flex justify-center items-center">
        <TickIcon className="fill-green-500 border-none" />
      </div>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-center text-gray-500">{subTitle}</p>
    </div>
  );
};

export default Success;
