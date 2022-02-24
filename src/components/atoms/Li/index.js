import React from "react";
import { StyledLi } from "./StyledLi";

const Li = ({
  children,
  key,
  headerLi,
  productListItem,
  cartProducts,
  footerSocialItem,
}) => {
  return (
    <StyledLi
      key={key}
      isHeaderLi={headerLi}
      isProductListItem={productListItem}
      isCartProducts={cartProducts}
      isFooterSocialItem={footerSocialItem}
    >
      {children}
    </StyledLi>
  );
};

export default Li;
