import React from "react";
import { StyledButton, StyledButtonMaterial } from "./StyledButton";

const Button = ({
  className,
  children,
  color,
  btnType,
  variant,
  type = "button",
  onClickFn,
  disabled,
  buttonHeader,
  loginBtn,
  registerBtn,
  contactBtn,
  btnInCart,
  buttonHeaderMenu,
  href,
  headerUl__dropdownBtn,
  headerUl__signOut,
}) => {
  return btnType === "material" ? (
    <StyledButtonMaterial
      className={className}
      type={type}
      color={color}
      variant={variant}
      onClick={onClickFn}
      disabled={disabled}
      loginBtn={loginBtn}
      registerBtn={registerBtn}
      contactBtn={contactBtn}
      href={href}
    >
      {children}
    </StyledButtonMaterial>
  ) : (
    <StyledButton
      className={className}
      color={color}
      onClick={onClickFn}
      disabled={disabled}
      isButtonHeader={buttonHeader}
      isBtnInCart={btnInCart}
      isButtonHeaderMenu={buttonHeaderMenu}
      headerUl__dropdownBtn={headerUl__dropdownBtn}
      headerUl__signOut={headerUl__signOut}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
