import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import CartAndFavIcon from "@/Components/Home/CartAndFavIcon";
import { PulseLoader } from "react-spinners";

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<{
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
  }>({
    brand: "",
    category: "",
    description: "",
    image: "",
    isNew: false,
    oldPrice: NaN,
    price: NaN,
    title: "",
    _id: NaN,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    console.log(router.query);
    const isNew = () => "true" == router.query.isNew;
    setProduct({
      brand: `${router.query.brand}`,
      category: `${router.query.category}`,
      description: `${router.query.description}`,
      image: `${router.query.image}`,
      isNew: isNew(),
      oldPrice: Number(router.query.oldPrice),
      price: Number(router.query.price),
      title: `${router.query.title}`,
      _id: Number(router.query._id),
    });
  }, [router.query]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center py-20  gap-6">
          <PulseLoader color="#13192155" size={40} speedMultiplier={1.5} />
        </div>
      ) : (
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
          <div className="flex flex-col gap-3 p-4 justify-center md:col-span-2">
            <div>
              <p className="text-amazon_blue font-bold text-xs md:text-sm">
                {product.category}_{product.brand}
              </p>
              <h2 className="text-xl md:text-3xl tracking-wide font-semibold">
                {product.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 ">{product.description}</p>
            <div>
              <p className="text-base text-gray-600">
                Price:{" "}
                <span className="text-amazon_blue text-lg">
                  ${Number(product.price).toFixed(2)}{" "}
                </span>
                <del className="ml-1">
                  ${Number(product.oldPrice).toFixed(2)}
                </del>
              </p>
              <p className="text-sm text-gray-700">
                You saved: ${(+product.oldPrice! - +product.price!).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() =>
                dispatch(cartActions.addToCart({ ...product, quantity: 1 }))
              }
              className="bg-amazon_blue font-bold w-full md:w-96 h-12 text-gray-200 rounded-lg mt-5 hover:bg-amazon_yellow hover:text-amazon_blue text-base duration-300"
            >
              add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
