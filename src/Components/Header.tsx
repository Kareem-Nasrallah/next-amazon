import Image from "next/image";
import logo from "../images/logo.png";
import cartIcon from "../images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";

const Header = () => {
  return (
    <div className="px-4 h-20 bg-amazon_blue sticky top-0 z-50 text-lightText flex justify-between items-center gap-2 mdl:gap-5">
      {/* logo */}
      <a
        href="#"
        className="text-xs duration-300 border border-transparent pt-2 px-2 flex items-center justify-center gap-1 hover:border-white"
      >
        <Image
          className="cursor-pointer object-contain"
          src={logo}
          width={112}
          height={42}
          alt="Logo image"
        />
      </a>

      {/* delivery */}
      <div className="cursor-pointer duration-300 border border-transparent py-1 px-2 hidden items-center justify-center gap-1 hover:border-white xl:inline-flex">
        <SlLocationPin />
        <div className="text-xs">
          <p className="text-gray-300">Deliver to</p>
          <p className="font-bold">USA</p>
        </div>
      </div>

      {/* search */}
      <div className={"p-0.5 relative h-10 flex-1 hidden md:inline-flex"}>
        <input
          type="text"
          className="w-full rounded-md h-10 py-1 px-2 text-base text-black border-[3px] border-transparent outline-none placeholder:text-sm focus-visible:border-amazon_yellow"
          placeholder="search next-amazon products"
        />
        <span className="absolute w-12 h-10 bg-amazon_yellow  right-0 flex items-center justify-center text-black text-2xl rounded-tr-md rounded-br-md">
          <HiOutlineSearch />
        </span>
      </div>

      {/* Signin */}
      <div className="text-xs text-gray-100 flex flex-col justify-center px-2  border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
        <p>Hello, sign in</p>
        <p className="gap-0.5 text-white font-bold flex items-center">
          Account & Lists
          <span>
            <BiCaretDown />
          </span>
        </p>
      </div>

      {/* Favorite */}
      <div className="text-xs text-gray-100 flex flex-col justify-center px-2  border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
        <p>Marked</p>
        <p className="text-white font-bold">& Favorite</p>
      </div>

      {/* cart */}
      <div className="flex items-center cursor-pointer text-xs duration-300 h-[70%] border border-transparent py-1 px-2 gap-1 hover:border-white relative">
        <Image
          className="object-cover"
          src={cartIcon}
          width={46}
          height={32}
          alt="cart icon"
        />
        <p className="text-xs text-white font-bold mt-3">cart</p>
        <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;
