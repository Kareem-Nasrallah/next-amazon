import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import CartAndFavIcon from "@/Components/cartAndFavIcon";
const ProductPage: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const dispatch = useDispatch();
  useEffect(() => {
    setProduct(router.query);
  }, [router.query]);

  console.log(product);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      <div className="w-full rounded-lg grid md:grid-cols-3 gap-3  bg-gray-100">
        <div className="relative group overflow-hidden rounded-lg flex items-center justify-center  bg-gray-200">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.title}
          />
          <CartAndFavIcon product={product} />
        </div>
        <div className="flex flex-col gap-3 px-6 justify-center items-start md:col-span-2">
          <div>
            <p className="text-amazon_blue font-bold text-sm">
              {product.category}_{product.brand}
            </p>
            <h3 className="text-3xl font-bold">{product.title}</h3>
          </div>
          <p className="text-g-500 ">{product.description}</p>
          <div>
            <p className="text-g-700 text-lg">
              Price: ${product.price}{" "}
              <del className="text-base text-gray-700">${product.oldPrice}</del>
            </p>
            <p className="text-black">
              You saved: ${+product.oldPrice! - +product.price!}
            </p>
          </div>
          <button
            onClick={() =>
              dispatch(cartActions.addToCart({ ...product, quantity: 1 }))
            }
            className="bg-amazon_blue font-bold w-96 h-12 text-white rounded-md mt-4 hover:bg-amazon_yellow hover:text-black duration-300"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
