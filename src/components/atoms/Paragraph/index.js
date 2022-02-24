import React from "react";
import { P } from "./StyledParagraph";

const Paragraph = ({
  children,
  newCustomer,
  priceItem,
  forgottenPassword,
  registerTerms,
  homeSentence,
  paragraphInHome,
  priceItemInCart,
  showCartQuantityItem,
  totalCostCart,
  productDescription,
  className,
}) => {
  return (
    <P
      isNewCustomer={newCustomer}
      forgottenPassword={forgottenPassword}
      isPriceItem={priceItem}
      registerTerms={registerTerms}
      homeSentence={homeSentence}
      paragraphInHome={paragraphInHome}
      priceItemInCart={priceItemInCart}
      showCartQuantityItem={showCartQuantityItem}
      totalCostCart={totalCostCart}
      productDescription={productDescription}
      className={className}
    >
      {children}
    </P>
  );
};

export default Paragraph;
