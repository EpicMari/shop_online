import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  className,
  headerWrapper,
  headerNavLink,
  loginFormWrapper,
  productsListWrapper,
  contactWrapper,
  registerFormWrapper,
  registerTermsWrapper,
  homeWrapper,
  contactTermsWrapper,
  plusMinusWrapper,
  lastThreeNewItems,
  homeSentenceWrapper,
  homeAbout,
  footerSocial,
  modalFilter,
  homeCycle,
  homeAboutContent,
  homeCycleContent,
  cartImgHeadingWrapper,
  contentWrapper,
  deliveryMethod,
  paypalButtons,
  checkoutWrapper,
  singleProductWrapper,
  headerUl__dropdown,
  headerUl__dropdownMenu,
  totalCost,
  paymentWrapper,
  paymentWrapper__cart,
}) => {
  return (
    <StyledDiv
      className={className}
      isHeaderWrapper={headerWrapper}
      isHeaderNavLink={headerNavLink}
      isLoginFormWrapper={loginFormWrapper}
      isProductsListWrapper={productsListWrapper}
      isContactWrapper={contactWrapper}
      isRegisterFormWrapper={registerFormWrapper}
      isRegisterTermsWrapper={registerTermsWrapper}
      isHomeWrapper={homeWrapper}
      isContactTermsWrapper={contactTermsWrapper}
      isPlusMinusWrapper={plusMinusWrapper}
      isLastThreeNewItems={lastThreeNewItems}
      isHomeSentenceWrapper={homeSentenceWrapper}
      isHomeAbout={homeAbout}
      isFooterSocial={footerSocial}
      isModalFilter={modalFilter}
      isHomeCycle={homeCycle}
      isHomeAboutContent={homeAboutContent}
      isHomeCycleContent={homeCycleContent}
      isCartImgHeadingWrapper={cartImgHeadingWrapper}
      isContentWrapper={contentWrapper}
      isDeliveryMethod={deliveryMethod}
      isPaypalButtons={paypalButtons}
      isCheckoutWrapper={checkoutWrapper}
      isSingleProductWrapper={singleProductWrapper}
      headerUl__dropdown={headerUl__dropdown}
      headerUl__dropdownMenu={headerUl__dropdownMenu}
      isTotalCost={totalCost}
      paymentWrapper={paymentWrapper}
      paymentWrapper__cart={paymentWrapper__cart}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
