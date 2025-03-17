import Image from "next/image";
import React from "react";
import { ProductCartType } from "../../type";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";

const CartProduct = ({ product }: { product: ProductCartType }) => {
  const dispatch = useDispatch();
  return (
    <div className="py-2 bg-gray-100 rounded-lg flex flex-col md:flex-row items-center gap-4">
      <Image
        src={product.image}
        alt={product.title + "'s photo"}
        width={150}
        height={150}
        className="object-cover"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-amazon_blue text-lg font-semibold">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-sm font-semibold text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              ${Number(product.price!).toFixed(2)}
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-between w-28 px-4 py-1 mt-1 border rounded-full border-gray-300 shadow-lg shadow-gray-300">
              <span
                className="w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full"
                onClick={() => dispatch(cartActions.addToCart(product))}
              >
                {<LuPlus />}
              </span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full">
                {product.quantity}
              </span>
              <span
                className="w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full"
                onClick={() => dispatch(cartActions.decreaseQuantity(product))}
              >
                {<LuMinus />}
              </span>
            </div>
            <div
              className="flex items-center gap-0.5 text-sm font-medium text-gray-400 cursor-pointer hover:text-red-600 duration-300"
              onClick={() => dispatch(cartActions.deleteProduct(product))}
            >
              <IoMdClose className="mt-0.5" /> <p>remove</p>
            </div>

            <div className="text-lg font-semibold text-amazon_blue sml:hidden block ms-auto">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue hidden sml:block">
          ${(product.price * product.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
