import React from "react";
import SingleCart from "../SingleCart/SingleCart";
import "./CartContainer.css";
const CartContainer = ({ players, setCart, cart, handleAddToCart }) => {
  return (
    <div>
      <div className="w-full ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-4">
        {players?.map((pd) => (
          <SingleCart
            player={pd}
            key={pd.id}
            cart={cart}
            setCart={setCart}
            handleAddToCart={handleAddToCart}
          ></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
