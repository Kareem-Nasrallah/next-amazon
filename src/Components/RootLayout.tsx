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
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
