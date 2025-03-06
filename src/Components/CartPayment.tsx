import React from "react";
import { SiMediamarkt } from "react-icons/si";
import { useSelector } from "react-redux";
import { stateType } from "../../type";

const CartPayment = () => {
  const { cartProducts } = useSelector((state: stateType) => state.store.cart);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm ">
          Your order qualifies for FREE Shipping bychoosing this option at
          checkout. seedetails....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total :
        <span className="font-bodyFont text-xl">
          {cartProducts
            .reduce((sum, product) => product.quantity * product.price + sum, 0)
            .toFixed(2)}
        </span>
      </p>
      <div>
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white cursor-not-allowed">
          Proceed to Buy
        </button>
        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
          Please login to continue
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
