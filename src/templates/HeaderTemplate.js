import React from "react";
import Header from "../components/molecules/Header";
import Cart from "../components/molecules/Cart";
import FooterSocial from "../components/molecules/FooterSocial";

const HeaderTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Cart />
      {children}
      <FooterSocial />
    </>
  );
};

export default HeaderTemplate;
