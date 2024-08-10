import Signup from "./components/Signup/Signup.tsx";
import "./App.css";
import Home from "./Pages/Home.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.tsx";
import Login from "./components/Login/Login.tsx";
import { findUser } from "./utils/common.js";
import { INITIAL_USER, organisationList } from "./constants/data.js";
import { useState } from "react";
import Success from "./components/Success/Success.tsx";
import { useSelector } from "react-redux";

const findOrganisationId = (name) => {
  return organisationList.find((org) => org.name === name);
};

function App() {
  const [userInfo, setUserInfo] = useState(INITIAL_USER);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    subTitle: "",
    isRedirect: false,
  });

  const navigate = useNavigate();
  const storeData = useSelector((store) => store.usersData);

  // For handling all inputs fields
  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      if (value.length <= 10) {
        setUserInfo((prev) => ({ ...prev, [name]: value }));
      }
      return;
    } else if (name === "pinCode") {
      if (value.length <= 6) {
        setUserInfo((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === "organisation") {
      setUserInfo((prev) => ({
        ...prev,
        [name]: value,
        organisationId: findOrganisationId(value).id,
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        id: new Date().toString(),
        [name]: value,
      }));
    }
  };

  // For handling login
  const handleLogin = () => {
    const { email, password } = userInfo;
    const isExistEmail = findUser("email", email);
    const isExistPassword = findUser("password", password);

    if (isExistEmail && isExistPassword) {
      setErrorMessage("");
      const message = {
        title: "Logging you in....",
        subTitle: "Kindly wait as we are curating the data accordingly.",
      };
      setSuccessMessage(message);
      navigate("/success");
    } else {
      setErrorMessage("Incorrect password,Please try again");
    }
  };

  console.log("redux==>", storeData);
  console.log("userInfo==>", userInfo);
  return (
    <div className="w-full h-full">
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Welcome userInfo={userInfo} handleInput={handleInput} />
            </Home>
          }
        />
        <Route
          path="/signup"
          element={
            <Home>
              <Signup
                userInfo={userInfo}
                handleInput={handleInput}
                setSuccessMessage={setSuccessMessage}
              />
            </Home>
          }
        />

        <Route
          path="/login"
          element={
            <Home>
              <Login
                userInfo={userInfo}
                handleInput={handleInput}
                handleLogin={handleLogin}
                errorMessage={errorMessage}
              />
            </Home>
          }
        />

        <Route
          path="/success"
          element={
            <Home>
              <Success
                title={successMessage.title}
                subTitle={successMessage.subTitle}
                isRedirect={successMessage.isRedirect}
              />
            </Home>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
