import React from "react";
import Header from "../components/molecules/Header";
import Cart from "../components/molecules/Cart";

const HeaderTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Cart />
      {children}
    </>
  );
};

export default HeaderTemplate;
