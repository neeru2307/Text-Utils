import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3666";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title={"TextUtils"} aboutText={"About Us"} mode={"light"} toggleMode={toggleMode}/><TextForm showAlert = {showAlert}/></>
    },
    {
      path: "/about",
      element: <><Navbar title={"TextUtils"} aboutText={"About Us"} mode={"light"}/><About/></>
    }
  ]);

  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

