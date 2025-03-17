import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../type";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { userActions } from "@/redux/userSlice";
import SearchBar from "./SearchBar";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  const { data: session } = useSession();

  console.log(session);

  const { cart, favorite, user } = useSelector(
    (allStoreData: stateType) => allStoreData.store
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(
        userActions.addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className="px-4 h-20 bg-amazon_blue sticky top-0 z-50 text-lightText flex justify-between items-center gap-2 mdl:gap-5">
      {/* logo */}
      <Link
        href="/"
        className="text-xs duration-300 border border-transparent pt-2 px-2 flex items-center justify-center gap-1 hover:border-white"
      >
        <Image
          className="cursor-pointer object-contain"
          src={logo}
          width={112}
          height={42}
          alt="Logo image"
        />
      </Link>

      {/* delivery */}
      <div className="cursor-pointer duration-300 border border-transparent py-1 px-2 hidden items-center justify-center gap-1 hover:border-white xl:inline-flex">
        <SlLocationPin />
        <div className="text-xs">
          <p className="text-gray-300">Deliver to</p>
          <p className="font-bold">EGY</p>
        </div>
      </div>

      {/* search */}
      <SearchBar />

      {/* Signin */}
      {session ? (
        <div className="text-xs flex items-center px-2 border border-transparent hover:border-white cursor-pointer h-[70%] gap-1 duration-300">
          <img
            src={user.image!}
            alt="User Image"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-gray-100 flex flex-col justify-center ">
            <p className=" text-white font-bold hidden mdl:block">
              {user.name}
            </p>
            <p className="text-white font-bold hidden mdl:hidden sml:block">
              {user.name?.split(" ")[0]}
            </p>
            <p className="hidden lg:block">{user.email}</p>
            <p className="hidden lg:hidden sml:block">
              {user.email?.substring(0, 10)}...
            </p>
          </div>
        </div>
      ) : (
        <div
          className="text-xs text-gray-100 flex flex-col justify-center px-2  border border-transparent hover:border-white cursor-pointer h-[70%] duration-300"
          onClick={() => signIn()}
        >
          <p>Hello, sign in</p>
          <p className="gap-0.5 text-white font-bold flex items-center">
            Account & Lists
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
      )}

      {/* Favorite */}
      <Link
        href={"./favorite"}
        className="fixed text-5xl text-amazon_light xl:hidden bottom-4 right-4"
      >
        <p className="absolute top-[45%] right-[50%] translate-x-[50%] -translate-y-[50%] text-amazon_yellow text-xl">
          {favorite.favoriteData.length}
        </p>
        <FaHeart />
      </Link>
      <Link
        href={"./favorite"}
        className="relative text-xs text-gray-100 hidden xl:flex flex-col justify-center px-2  border border-transparent hover:border-white cursor-pointer h-[70%] duration-300"
      >
        <p>Marked</p>
        <p className="text-white font-bold">& Favorite</p>
        {favorite.favoriteData?.length === 0 ? (
          ""
        ) : (
          <span className="absolute right-2 top-2 w-4 h-4 border border-gray-400 flex justify-center items-center text-amazon_yellow">
            {favorite.favoriteData?.length}
          </span>
        )}
      </Link>

      {/* cart */}
      <Link
        href={"/cart"}
        className="fixed text-6xl text-amazon_light mdl:hidden bottom-16 right-3"
      >
        <p className="absolute top-[33%] right-[50%] translate-x-[50%] -translate-y-[50%] text-amazon_yellow text-xl">
          {favorite.favoriteData.length}
        </p>
        <HiShoppingCart />
      </Link>
      <Link
        href={"/cart"}
        className="hidden mdl:flex items-center cursor-pointer text-xs duration-300 h-[70%] border border-transparent py-1 px-2 gap-1 hover:border-white relative "
      >
        <Image
          className="object-cover"
          src={cartIcon}
          width={46}
          height={32}
          alt="cart icon"
        />
        <p className="text-xs text-white font-bold mt-3">cart</p>
        <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
          {cart.cartProducts.length}
        </span>
      </Link>
    </div>
  );
};

export default Header;
