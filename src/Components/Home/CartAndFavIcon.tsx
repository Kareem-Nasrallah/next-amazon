import React from "react";
import { ProductType } from "../../../type";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { cartActions } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import { favoriteActions } from "@/redux/favoriteSlice";

const CartAndFavIcon: React.FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border border-gray-400 rounded-md w-12 h-20 flex flex-col items-center justify-center backdrop-blur-md absolute -right-12 top-[50%] -translate-y-[50%] duration-300 group-hover:right-0">
      <p
        onClick={() =>
          dispatch(cartActions.addToCart({ ...product, quantity: 1 }))
        }
        className="flex justify-center items-center w-full h-full border-b border-gray-400 hover:bg-amazon_yellow cursor-pointer duration-300"
      >
        <HiShoppingCart className="text-2xl" />
      </p>
      <p
        onClick={() => dispatch(favoriteActions.addToFavorit(product))}
        className="flex justify-center items-center w-full h-full hover:bg-amazon_yellow cursor-pointer duration-300"
      >
        <FaHeart />
      </p>
    </div>
  );
};

export default CartAndFavIcon;
