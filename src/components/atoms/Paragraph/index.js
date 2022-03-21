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
  paymentWrapper__text,
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
      paymentWrapper__text={paymentWrapper__text}
    >
      {children}
    </P>
  );
};

export default Paragraph;
