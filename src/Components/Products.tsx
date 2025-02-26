import React from "react";
import ProductsType from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

interface PropsType {
  productData: ProductsType[];
}

const Products = ({ productData }: PropsType) => {
  return (
    <div className="w-full px-6 gap-6 grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 xl:grid-cols-4">
      {productData.map((product) => (
        <div
          key={product._id}
          className="bg-white text-black rounded-lg border border-gray-300 w-full p-4 group overflow-hidden"
        >
          <p className="animate-bounce text-right text-sm">
            !save {product.oldPrice - product.price}$
          </p>
          <div className="relative h-[260px] flex justify-center items-center overflow-hidden">
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
              <p className="flex justify-center items-center w-full h-full border-b border-gray-400 hover:bg-amazon_yellow cursor-pointer duration-300">
                <HiShoppingCart className="text-2xl" />
              </p>
              <p className="flex justify-center items-center w-full h-full hover:bg-amazon_yellow cursor-pointer duration-300">
                <FaHeart />
              </p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300">
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="font-bold">{product.title}</p>
            <p>
              <span className="line-through text-gray-800"></span>{" "}
              {product.price}
            </p>
            <p className="text-sm">{product.description.split("", 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
