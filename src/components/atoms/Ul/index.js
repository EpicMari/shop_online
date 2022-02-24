import React from "react";
import { StyledUl } from "./StyledUl";

const Ul = ({ children, productsList, footerSocial, headerUl }) => {
  return (
    <StyledUl
      isProductsList={productsList}
      isHeaderUl={headerUl}
      isFooterSocial={footerSocial}
    >
      {children}
    </StyledUl>
  );
};

export default Ul;
