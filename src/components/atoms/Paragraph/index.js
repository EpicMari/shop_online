import React from "react";
import { P } from "./StyledParagraph";

const Paragraph = ({
  children,
  size,
  weight,
  color,
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
  paymentWrapper__cartItemName,
}) => {
  return (
    <P
      size={size}
      weight={weight}
      color={color}
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
      paymentWrapper__cartItemName={paymentWrapper__cartItemName}
    >
      {children}
    </P>
  );
};

export default Paragraph;
