import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("dark");
  const [darkBtnTxt, setdarkBtnTxt] = useState("Enable Dark Mode");
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, type) => {
    setAlertMessage({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlertMessage(null);
    }, 1000);
  };

  const darkMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeText("dark");
      setdarkBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success");
    } else {
      setMode("dark");
      setModeText("white");
      setdarkBtnTxt("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Enable", "success");
    }
  };
  return (
    <>
      {/* NAVBAR */}
      <Navbar
        mode={mode}
        darkMode={darkMode}
        modeText={modeText}
        darkBtnTxt={darkBtnTxt}
      />
      {/* ALERT */}
      <div className="container">
        <Alert alert={alertMessage} />
      </div>
      {/* TEXT AREA */}
      <div className="container">
        <Text
          showAlert={showAlert}
          mode={mode}
          modeText={modeText}
          darkBtnTxt={darkBtnTxt}
          heading="Enter the text to analyze"
          heading2="Your text summary"
        />
      </div>
      {/* About */}
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
