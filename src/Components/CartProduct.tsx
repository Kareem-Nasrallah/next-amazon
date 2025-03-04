import Image from "next/image";
import React from "react";
import { ProductCartType } from "../../type";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartProduct = ({ product }: { product: ProductCartType }) => {
  return (
    <div className="bg-gray-100 rounded-lg flex items-start gap-4">
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
              ${product.price.toFixed(2)}
            </span>
          </p>
        </div>
        <div>
          <div>
            <span>{LuMinus}</span>
            <span>{LuPlus}</span>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
