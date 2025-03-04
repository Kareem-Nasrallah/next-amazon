import React from "react";
import { useSelector } from "react-redux";
import { ProductCartType, stateType } from "../../type";
import Link from "next/link";
import CartProduct from "@/Components/CartProduct";

const Cart = () => {
  const { cartProducts } = useSelector((state: stateType) => state.store.cart);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {cartProducts.length > 0 ? (
        <>
          <div className="bg-white  col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b border-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              {cartProducts.map((product: ProductCartType) => (
                <div key={product._id} className="pt-2 flex gap-2 flex-col">
                  <CartProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-80 flex flex-col justify-center items-center bg-white rounded-lg">
          <h4 className="text-xl">Your cart is empty!</h4>
          <Link href="/">
            <button className="bg-amazon_blue rounded-md px-4 py-2 text-white hover:bg-amazon_yellow hover:text-amazon_blue">
              goto shooping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
