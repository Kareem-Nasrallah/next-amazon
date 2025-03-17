import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, stateType } from "../../type";
import FavoriteProduct from "@/Components/FavoriteProduct";
import { favoriteActions } from "@/redux/favoriteSlice";
import Head from "next/head";

const FavoritePage = () => {
  const favoriteProducts = useSelector(
    (state: stateType) => state.store.favorite.favoriteData
  ) as ProductType[];
  const dispatch = useDispatch();

  const handelResetCart = () => {
    const confirmReset = confirm(
      "Are you sure to reset your favorite Product list from the cart ??"
    );
    if (confirmReset) {
      dispatch(favoriteActions.resetFavorite());
    }
  };

  return (
    <>
    <Head>
      <title>Favorite List</title>
    </Head>
      <div className="max-w-screen-xl mx-auto px-6 gap-10 py-4 ">
        {favoriteProducts?.length > 0 ? (
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between border-b border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Favorte Product
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Action</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              {favoriteProducts.map((product: ProductType) => (
                <div key={product._id} className="mt-2 flex gap-2 flex-col">
                  <FavoriteProduct product={product} />
                </div>
              ))}
              <div className="w-full">
                <button
                  className="bg-gray-200 mt-4 w-44 h-10 rounded-lg hover:bg-red-600 hover:text-white duration-300"
                  onClick={handelResetCart}
                >
                  reset Favorite List
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-96 py-5 shadow-lg flex flex-col justify-center items-center bg-white rounded-lg">
            <h4 className="text-lg mb-2 font-medium">
              Your Favorite list is empty!
            </h4>
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

export default FavoritePage;
