import React from "react";
import { StyledSpan } from "./StyledSpan";

const Span = ({
  children,
  btnCartContent,
  toProductsHome,
  headerAmountHeader,
  headerAmountProductsInCart,
}) => {
  return (
    <StyledSpan
      isBtnCartContent={btnCartContent}
      toProductsHome={toProductsHome}
      isHeaderAmountHeader={headerAmountHeader}
      isHeaderAmountProductsInCart={headerAmountProductsInCart}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
