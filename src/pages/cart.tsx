import React from "react";
import { useSelector } from "react-redux";
import { ProductCartType, stateType } from "../../type";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const { cartProducts } = useSelector((state: stateType) => state.store.cart);

  return (
    <div className="max-w-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
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
                <div key={product._id} className="pt-2 flex gap-2 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title + "'s photo"}
                    width={200}
                    height={300}
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-amazon_blue text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-500">{product.description}</p>
                    <p className="text-gray-500">Unit Price ${product.price}</p>
                    <div></div>
                  </div>
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
