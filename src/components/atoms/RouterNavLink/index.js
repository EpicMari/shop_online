import React from "react";
import { StyledNavLink } from "./StyledRouterNavLink";

const RouterNavLink = ({ children, to, link, onClickFn, button }) => {
  return (
    <StyledNavLink to={to} onClick={onClickFn} link={link} button={button}>
      {children}
    </StyledNavLink>
  );
};

export default RouterNavLink;
