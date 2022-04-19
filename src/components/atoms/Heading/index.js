import React from "react";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./StyledHeading";

const Heading = ({
  headingType,
  children,
  cartHeading,
  headingHomeNewItems,
  homeHeadingAbout,
  productInCart,
  emptyCart,
  paymentWrapper__description,
}) => {
  const _renderHeading = () => {
    switch (headingType) {
      case "h1":
        return (
          <StyledH1
            headingHomeNewItems={headingHomeNewItems}
            emptyCart={emptyCart}
          >
            {children}
          </StyledH1>
        );
      case "h2":
        return (
          <StyledH2
            cartHeading={cartHeading}
            homeHeadingAbout={homeHeadingAbout}
            productInCart={productInCart}
          >
            {children}
          </StyledH2>
        );
      case "h3":
        return (
          <StyledH3 paymentWrapper__description={paymentWrapper__description}>
            {children}
          </StyledH3>
        );
      case "h4":
        return <StyledH4>{children}</StyledH4>;
      case "h5":
        return <StyledH5>{children}</StyledH5>;
      case "h6":
        return (
          <StyledH6 paymentWrapper__description={paymentWrapper__description}>
            {children}
          </StyledH6>
        );

      default:
        return <StyledH3>{children}</StyledH3>;
    }
  };

  return <>{_renderHeading()}</>;
};

export default Heading;
