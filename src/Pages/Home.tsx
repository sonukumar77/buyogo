import React from "react";
import LoginBanner from "../assets/images/login.png";

const Home = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-500 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white w-3/4 rounded-2xl flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 bg-cover hidden md:block">
          <img
            src={LoginBanner}
            alt="login-Banner"
            className="w-full h-full rounded-l-2xl md:rounded-l-2xl  object-center"
          />
        </div>
        <div className="w-full md:w-3/5 p-4 md:ml-10 flex justify-center items-start flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Home;
