import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SingleCart.css";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const SingleCart = ({ player, cart, setCart, handleAddToCart }) => {
  const { img, name, description, time, age } = player;

  return (
    <div className="" data-aos="zoom-in">
      <div className="card card-compact w-96 h-full bg-base-100 shadow-lg">
        <figure>
          <img className="w-full h-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 60) + "..."}</p>
          <p className="text-base">
            {" "}
            <span className="ml-0 text-black font-medium">For age : </span>
            {age}
          </p>
          <p className="text-base">
            <span className="text-black font-medium">Time required : </span>
            {time} s
          </p>
          <div className="card-actions justify-end ">
            <button
              onClick={() => handleAddToCart(player)}
              className="card-btn hover:bg-blue-800"
            >
              <p className="flex justify-between ">
                Add to cart{" "}
                <span className="ml-3">
                  {" "}
                  <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
