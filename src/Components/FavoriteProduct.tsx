import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import { favoriteActions } from "@/redux/favoriteSlice";
import { cartActions } from "@/redux/cartSlice";

const FavoriteProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  return (
    <div className="py-2 bg-gray-100 rounded-lg flex flex-col md:flex-row items-center gap-4 mb-2">
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
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-sm font-semibold text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              ${Number(product.price!).toFixed(2)}
            </span>
          </p>
          <button
            className="w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2"
            onClick={() => {
              dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
              dispatch(favoriteActions.removeFavProduct(product));
            }}
          >
            add to cart
          </button>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          ${Number(product.price!).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
