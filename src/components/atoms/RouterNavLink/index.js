import React from "react";
import { StyledNavLink } from "./StyledRouterNavLink";

const RouterNavLink = ({
  children,
  to,
  onClickFn,
  toProductsHome,
  checkoutCart,
  headerUl__dropdownLink,
}) => {
  return (
    <StyledNavLink
      to={to}
      onClick={onClickFn}
      isToProductsHome={toProductsHome}
      isCheckoutCart={checkoutCart}
      headerUl__dropdownLink={headerUl__dropdownLink}
    >
      {children}
    </StyledNavLink>
  );
};

export default RouterNavLink;
