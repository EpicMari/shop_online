import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "./StyledHeading";

const Heading = ({
  headingType,
  children,
  loginHeading,
  registerHeading,
  productListItem,
  cartHeading,
  headingHomeNewItems,
  homeHeadingAbout,
  productInCart,
  emptyCart,
  paymentWrapper__heading,
  paymentWrapper__description,
  paymentWrapper__orderValue,
}) => {
  const _renderHeading = () => {
    switch (headingType) {
      case "h1":
        return (
          <H1 headingHomeNewItems={headingHomeNewItems} emptyCart={emptyCart}>
            {children}
          </H1>
        );
      case "h2":
        return (
          <H2
            loginHeading={loginHeading}
            registerHeading={registerHeading}
            productListItem={productListItem}
            cartHeading={cartHeading}
            homeHeadingAbout={homeHeadingAbout}
            productInCart={productInCart}
          >
            {children}
          </H2>
        );
      case "h3":
        return (
          <H3 paymentWrapper__heading={paymentWrapper__heading}>{children}</H3>
        );
      case "h4":
        return <H4>{children}</H4>;
      case "h5":
        return (
          <H5 paymentWrapper__orderValue={paymentWrapper__orderValue}>
            {children}
          </H5>
        );
      case "h6":
        return (
          <H6 paymentWrapper__description={paymentWrapper__description}>
            {children}
          </H6>
        );

      default:
        return <H3>{children}</H3>;
    }
  };

  return <>{_renderHeading()}</>;
};

export default Heading;
