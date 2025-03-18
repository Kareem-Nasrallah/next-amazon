import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCartType, stateType } from "../../type";
import Link from "next/link";
import CartProduct from "@/components/cart/CartProduct";
import { cartActions } from "@/redux/cartSlice";
import CartPayment from "@/components/cart/CartPayment";
import Head from "next/head";

const Cart = () => {
  const { cartProducts } = useSelector((state: stateType) => state.store.cart);
  const dispatch = useDispatch();

  const handelResetCart = () => {
    const confirmReset = confirm(
      "Are you sure to reset your Products from the cart ??"
    );
    if (confirmReset) {
      dispatch(cartActions.resetCart());
    }
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="max-w-screen-2xl mx-auto px-6 grid gap-10 py-4 grid-cols-[1fr_1fr_1fr_1fr_200px] xl:grid-cols-[1fr_1fr_1fr_1fr_300px] ">
        {cartProducts.length > 0 ? (
          <>
            <div className="bg-white  col-span-5 lg:col-span-4 p-4 rounded-lg">
              <div className="flex items-center justify-between border-b border-gray-400 pb-1">
                <p className="text-2xl font-semibold text-amazon_blue">
                  Shopping Cart
                </p>
                <p className="text-lg font-semibold text-amazon_blue">
                  Subtotle
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                {cartProducts.map((product: ProductCartType) => (
                  <div key={product._id} className="pt-2 flex gap-2 flex-col">
                    <CartProduct product={product} />
                  </div>
                ))}
                <div className="w-full">
                  <button
                    className="bg-gray-200 mt-4 w-44 h-10 rounded-lg hover:bg-red-600 hover:text-white duration-300"
                    onClick={handelResetCart}
                  >
                    reset cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white sticky top-24 h-64 p-4 col-span-full md:col-span-3 mdl:col-span-2 lg:col-span-1 rounded-lg flex items-center justify-center">
              <CartPayment />
            </div>
          </>
        ) : (
          <div className="h-96 py-5 shadow-lg col-span-5 flex flex-col justify-center items-center bg-white rounded-lg">
            <h4 className="text-lg mb-2 font-medium">Your cart is empty!</h4>
            <Link href="/">
              <button className="w-52 h-10 bg-amazon_blue rounded-lg px-4 py-2 text-white text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
                go to shooping
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
