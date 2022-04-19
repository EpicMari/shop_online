import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({
  className,
  children,
  color,
  type = "button",
  onClickFn,
  disabled,
  buttonHeader,
  loginBtn,
  btnInCart,
  buttonHeaderMenu,
  headerUl__dropdownBtn,
  headerUl__signOut,
  addProductToCart,
  button,
  contained,
  responsive,
  animation,
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      color={color}
      onClick={onClickFn}
      disabled={disabled}
      isButtonHeader={buttonHeader}
      isBtnInCart={btnInCart}
      isButtonHeaderMenu={buttonHeaderMenu}
      headerUl__dropdownBtn={headerUl__dropdownBtn}
      headerUl__signOut={headerUl__signOut}
      addProductToCart={addProductToCart}
      button={button}
      contained={contained}
      responsive={responsive}
      animation={animation}
      loginBtn={loginBtn}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
