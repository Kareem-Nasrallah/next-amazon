import React from "react";
import { ProductType } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import { favoriteActions } from "@/redux/favoriteSlice";

interface PropsType {
  productData: ProductType[];
}

const Products = ({ productData }: PropsType) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 gap-6 grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 xl:grid-cols-4">
      {productData.map((product) => (
        <div
          key={product._id}
          className="relative bg-white text-black rounded-lg border border-gray-300 w-full p-4 group overflow-hidden"
        >
          <div className="flex justify-between items-center">
            {product.isNew ? (
              <p className="bg-rose-600 rounded-lg text-white text-sm py-1 px-2 font-medium  tracking-wide">
                New
              </p>
            ) : (
              ""
            )}
            <p className="animate-bounce text-right text-sm  tracking-wide ">
              !save {(product.oldPrice - product.price).toFixed(2)}$
            </p>
          </div>
          <div className="relative h-[250px] flex justify-center items-center overflow-hidden">
            <Image
              className="scale-90 hover:scale-100 duration-300 w-full"
              src={product.image}
              width={300}
              height={300}
              alt={product.title}
            />
            <div
              className="border border-gray-400 rounded-md w-12 h-20 flex flex-col items-center justify-center
                        backdrop-blur-md absolute -right-12 top-[50%] -translate-y-[50%] duration-300 group-hover:right-0"
            >
              <p
                onClick={() =>
                  dispatch(cartActions.addToCart({ ...product, quantity: 1 }))
                }
                className="flex justify-center items-center w-full h-full border-b border-gray-400 hover:bg-amazon_yellow cursor-pointer duration-300"
              >
                <HiShoppingCart className="text-2xl" />
              </p>
              <p
                onClick={() =>
                  dispatch(
                    favoriteActions.addToFavorit({ ...product, quantity: 1 })
                  )
                }
                className="flex justify-center items-center w-full h-full hover:bg-amazon_yellow cursor-pointer duration-300"
              >
                <FaHeart />
              </p>
            </div>
          </div>
          <div className="w-full py-3 border-t border-gray-300">
            <p className="text-xs text-gray-500">{product.category}</p>
            <p className="font-medium">{product.title}</p>
            <div className="flex justify-start items-center gap-2">
              <span className="text-sm line-through text-gray-800">
                {product.oldPrice.toFixed(2)}
              </span>
              <span className="text-amazon_blue font-semibold">
                {product.price.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-600 text-justify">
              {product.description.substring(0, 120)}...
            </p>
            <button
              onClick={() =>
                dispatch(cartActions.addToCart({ ...product, quantity: 1 }))
              }
              className="bg-amazon_blue font-bold w-full h-10 text-white rounded-md mt-4 hover:bg-amazon_yellow hover:text-black duration-300"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
