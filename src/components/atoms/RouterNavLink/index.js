import React from "react";
import { StyledNavLink } from "./StyledRouterNavLink";

const RouterNavLink = ({
  children,
  to,
  onClickFn,
  toProductsHome,
  checkoutCart,
}) => {
  return (
    <StyledNavLink
      to={to}
      onClick={onClickFn}
      isToProductsHome={toProductsHome}
      isCheckoutCart={checkoutCart}
    >
      {children}
    </StyledNavLink>
  );
};

export default RouterNavLink;
