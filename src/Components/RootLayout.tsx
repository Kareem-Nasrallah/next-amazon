import React from "react";
import Header from "./header/Header";
import BottomHeader from "./header/BottomHeader";
import Footer from "./Footer";

interface propsType {
  children: React.ReactElement;
}

const RootLayout: React.FC<propsType> = ({ children }) => {
  return (
    <>
      <Header />
      <BottomHeader />
      <div className="bg-gray-300">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
