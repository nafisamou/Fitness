import React, { useEffect, useState } from "react";
import CartContainer from "../CartContainer/CartContainer";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [breakTime, setBreakTime] = useState("");

  const getOldBreak = localStorage.getItem("breakTime",breakTime);
  const oldBreak = JSON.parse(getOldBreak);
  const handleAddToBreak = (breakes) => {
    if (oldBreak) {
      localStorage.setItem('breakTime',breakes);
      setBreakTime(breakes);
      toast("Wow! you have clicked successfully!");
    } else {
      localStorage.setItem("breakTime", breakes);
      setBreakTime(breakes);
    }
  };
const handleAddToCart = (id)=>{
const newCart = [...cart, id];
setCart(newCart);
}
  useEffect(() => {
    fetch(`pacakage.json`)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      });
  });
  const handleComplete = () => {
    Swal.fire("Good job!", "Activity Completed!", "success");
  };
let total = 0;
for(const product of cart){
  total = total + product.time;
}

  return (
    <div className="shadow-xl mb-5 p-5">
      <div className="shadow-xl ">
        <h1 className="text-center text-4xl textarea-ghost text-slate-50 m-5 font-bold p-6 backdrop-blur-2xl bg-indigo-600 hover-bordered hover:bg-indigo-700 mb-12  font-mono rounded-t-full rounded-r-full ">
          Power, Fitness and Strength
        </h1>
      </div>
      <div className="home-container">
        <div className="left-side">
          <div className="players-container">
            <CartContainer players={players} cart={cart} setCart={setCart}></CartContainer>
          </div>
        </div>
        <div className="grid hidden md:grid-cols-1  lg:block ">
          <div className="cart">
            <div className="bg-white p-10 ">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="shadow-lg">
                <h1 className="ml-4 text-2xl bg-blue-600 text-white p-2 rounded-sm font-sans  text-center font-semibold mt-4">
                  Nafisa Akter Mou
                </h1>
              </div>
              <div className="flex m-3 py-3">
                <div className="bg-gray-100 mr-5 p-5 rounded-lg">
                  <p>52 kg</p>
                  <p>Weight</p>
                </div>
                <div className="bg-gray-100 mr-5 p-5 rounded-lg">
                  <p>24</p>
                  <p>BMI</p>
                </div>
                <div className="bg-gray-100 mr-5 p-5 rounded-lg">
                  <p>5.2</p>
                  <p>Height</p>
                </div>
                <div className="bg-gray-100  p-5 rounded-lg">
                  <p>22 yrs</p>
                  <p>Age</p>
                </div>
              </div>
              <div>
                <h1 className="ml-4 font-bold text-2xl">Add A Break</h1>
                <div className="bg-dark bg-opacity-10 rounded-3xl p-2 flex justify-evenly gap-4 pt-4">
                  <button
                    onClick={() => handleAddToBreak(10)}
                    className="btn btn-circle bg-white mr-3 text-black hover:bg-blue-500 hover:text-white"
                  >
                    10 s
                  </button>
                  <button
                    onClick={() => handleAddToBreak(20)}
                    className="btn btn-circle  bg-white mr-3 text-black hover:bg-blue-500 hover:text-white "
                  >
                    {" "}
                    20 s
                  </button>
                  <button
                    onClick={() => handleAddToBreak(30)}
                    className="btn btn-circle bg-white mr-3 text-black hover:bg-blue-500 hover:text-white"
                  >
                    {" "}
                    30 s
                  </button>
                  <button
                    onClick={() => handleAddToBreak(40)}
                    className="btn btn-circle bg-white mr-3 text-black hover:bg-blue-500 hover:text-white"
                  >
                    {" "}
                    40 s
                  </button>
                  <button
                    onClick={() => handleAddToBreak(50)}
                    className="btn btn-circle bg-white mr-3 text-black hover:bg-blue-500 hover:text-white"
                  >
                    {" "}
                    50 s
                  </button>
                </div>
                <div>
                  <div className="flex bg-slate-200 justify-between p-4 m-4 rounded-lg">
                    <p>Exercise Time</p>
                    <p>{total} seconds</p>
                  </div>
                  <div className="flex bg-slate-200 justify-between p-4 m-4 rounded-lg">
                    <p>Break Time</p>
                    <p>{oldBreak?oldBreak: "0"} seconds</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleComplete()}
              className="btn btn-primary w-96"
            >
              Activity Completed
            </button>
            {/* <ToastContainer/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
