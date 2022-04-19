import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  className,
  form,
  terms,
  headerWrapper,
  headerNavLink,
  loginFormWrapper,
  productsListWrapper,
  contactWrapper,
  registerFormWrapper,
  termsWrapper,
  homeWrapper,
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
  singleProductContent,
  headerUl__dropdown,
  headerUl__dropdownMenu,
  totalCost,
  paymentWrapper,
  paymentWrapper__content,
  paymentWrapper__cart,
  headerWrapper__content,
  paymentWrapper__info,
  formWrapper,
}) => {
  return (
    <StyledDiv
      className={className}
      form={form}
      terms={terms}
      isHeaderWrapper={headerWrapper}
      isHeaderNavLink={headerNavLink}
      isLoginFormWrapper={loginFormWrapper}
      isProductsListWrapper={productsListWrapper}
      isContactWrapper={contactWrapper}
      isRegisterFormWrapper={registerFormWrapper}
      isTermsWrapper={termsWrapper}
      isHomeWrapper={homeWrapper}
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
      singleProductContent={singleProductContent}
      headerUl__dropdown={headerUl__dropdown}
      headerUl__dropdownMenu={headerUl__dropdownMenu}
      isTotalCost={totalCost}
      paymentWrapper={paymentWrapper}
      paymentWrapper__content={paymentWrapper__content}
      paymentWrapper__cart={paymentWrapper__cart}
      headerWrapper__content={headerWrapper__content}
      paymentWrapper__info={paymentWrapper__info}
      formWrapper={formWrapper}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
