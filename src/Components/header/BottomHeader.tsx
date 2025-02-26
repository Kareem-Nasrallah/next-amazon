import React from "react";
import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className="px-4 flex h-10 items-center gap-1 justify-start text-sm  text-white bg-amazon_light">
      <p className="gap-1 cursor-pointer h-8 items-center inline-flex p-0.5 border border-transparent px-2 hover:border-white duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="cursor-pointer h-8 border items-center hidden md:inline-flex border-transparent px-2 hover:border-white duration-300">
        Today Deais
      </p>
      <p className="cursor-pointer h-8 border items-center  hidden md:inline-flex border-transparent px-2 hover:border-white duration-300">
        Customer Service
      </p>
      <p className="cursor-pointer h-8 border items-center  hidden md:inline-flex border-transparent px-2 hover:border-white duration-300">
        Registry
      </p>
      <p className="cursor-pointer h-8 border items-center  hidden md:inline-flex border-transparent px-2 hover:border-white duration-300">
        Gift Cards
      </p>
      <p className="cursor-pointer h-8 border items-center  hidden md:inline-flex border-transparent px-2 hover:border-white duration-300">
        Sell
      </p>
      <p className="cursor-pointer h-8 border items-center  hidden md:inline-flex border-transparent px-2 hover:border-red-600 hover:text-red-400 text-amazon_yellow duration-300">
        Sign Out
      </p>
    </div>
  );
};

export default BottomHeader;
