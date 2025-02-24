import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
  
  return (
    <div className="p-4 h-20 bg-amazon_blue sticky top-0 z-50 text-lightText flex items-center gap-2 mdl:gap-5">
      {/* logo */}
      <a href="#" className="text-xs transition-all duration-300 border border-transparent pt-1 px-2 flex items-center justify-center gap-1 hover:border-white">
        <Image
          className="object-contain"
          src={logo}
          width={112}
          height={42}
          alt="Logo image"
        />
      </a>
      {/* delivery */}
      <div className="transition-all duration-300 border border-transparent pt-1 px-2 hidden items-center justify-center gap-1 hover:border-white xl:inline-flex">
        <SlLocationPin />
        <div className="text-xs">
          <p className="text-gray-300">Deliver to</p>
          <p className="font-bold">USA</p>
        </div>
      </div>
      {/* search */}
      <div className={" p-0.5 grow"}>
        <input
          type="text"
          className="w-full py-1 px-2"
          placeholder="search next-amazon products"
        />
        <i className="bg-orange-300 text-black"></i>
      </div>
      {/*  */}
      <div className="text-xs transition-all duration-300 border border-transparent pt-1 px-2 gap-1 hover:border-white">
        <p className="text-gray-300">Hello, sign in</p>
        <p className="font-bold">Account & Lists </p>
      </div>
      {/* Favorite */}
      <div className="text-xs transition-all duration-300 border border-transparent pt-1 px-2 gap-1 hover:border-white">
        <p className="text-gray-300">Marked</p>
        <p className="font-bold">& Favorite</p>
      </div>
      {/* cart */}
      <div className="text-xs transition-all duration-300 border border-transparent pt-1 px-2 gap-1 hover:border-white">
        <i></i>
        <p>cart</p>
      </div>
    </div>
  );
};

export default Header;
