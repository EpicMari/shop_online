import React from "react";
import { StyledLi } from "./StyledLi";

const Li = ({
  children,
  key,
  headerLi,
  productListItem,
  cartProducts,
  footerSocialItem,
  paymentWrapper__cartItem,
}) => {
  return (
    <StyledLi
      key={key}
      isHeaderLi={headerLi}
      isProductListItem={productListItem}
      isCartProducts={cartProducts}
      isFooterSocialItem={footerSocialItem}
      paymentWrapper__cartItem={paymentWrapper__cartItem}
    >
      {children}
    </StyledLi>
  );
};

export default Li;
