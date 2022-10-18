import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calculation from "./components/Calculation/Calculation";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
