import Image from "next/image";
import React from "react";
import logoImage from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-amazon_light text-gray-300 h-20 gap-4 flex items-center justify-center">
      <Image src={logoImage} width={96} height={35} alt="Logo Image" />
      <span className="text-sm -mt-4">
        All rights reserved
        <a
          className="ms-1.5 duration-300 hover:text-white hover:underline decoration-[1px] cursor-pointer"
          target="_blank"
          href="https://k-nasrallah-portfolio.vercel.app/"
        >
          @Kareem_Nasrallah
        </a>
      </span>
    </div>
  );
};

export default Footer;
