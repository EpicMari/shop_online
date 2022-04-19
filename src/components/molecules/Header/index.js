import React, { useContext } from "react";
import RouterNavLink from "../../atoms/RouterNavLink";
import { routes } from "../../../routes";
import RootContext from "../../../context/RootContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../../firebase/firebaseConfig";
import { Redirect } from "react-router-dom";
import {
  StyledButton,
  StyledContentBox,
  StyledDropdownBox,
  StyledDropdownButton,
  StyledDropdownMenuBox,
  StyledList,
  StyledListItem,
  StyledNavigation,
  StyledSignOutButton,
  StyledSpanAmount,
  StyledWrapper,
} from "./StyledHeader";

const Header = () => {
  const { currentUser, handleCartOpen, menuToggle, onOffMenu, menuOff, cart } =
    useContext(RootContext);

  return (
    <>
      <StyledWrapper>
        <StyledContentBox>
          <StyledButton onClickFn={handleCartOpen}>
            <ShoppingCartIcon />
            {cart.length >= 1 && (
              <StyledSpanAmount>{cart.length}</StyledSpanAmount>
            )}
          </StyledButton>
          <StyledNavigation className={onOffMenu && "active"}>
            <StyledList>
              <StyledListItem>
                <RouterNavLink link="true" to={routes.home} onClickFn={menuOff}>
                  Home
                </RouterNavLink>
              </StyledListItem>
              <StyledListItem>
                <RouterNavLink
                  link="true"
                  to={routes.products}
                  onClickFn={menuOff}
                >
                  Products
                </RouterNavLink>
              </StyledListItem>
              <StyledListItem>
                <RouterNavLink
                  link="true"
                  to={routes.contact}
                  onClickFn={menuOff}
                >
                  Contact
                </RouterNavLink>
              </StyledListItem>
            </StyledList>
            {currentUser ? (
              <StyledDropdownBox className="dropdown">
                <StyledDropdownButton>User</StyledDropdownButton>
                <StyledDropdownMenuBox>
                  <RouterNavLink
                    link="true"
                    to={routes.orders}
                    onClickFn={menuOff}
                  >
                    Orders
                  </RouterNavLink>
                  <StyledSignOutButton onClickFn={() => auth.signOut()}>
                    logout
                  </StyledSignOutButton>
                </StyledDropdownMenuBox>
              </StyledDropdownBox>
            ) : (
              <RouterNavLink link="true" to={routes.login} onClickFn={menuOff}>
                Log In
              </RouterNavLink>
            )}
          </StyledNavigation>
          <StyledButton className="menuOff" onClickFn={menuToggle}>
            {onOffMenu ? <CloseIcon /> : <MenuIcon />}
          </StyledButton>
        </StyledContentBox>
      </StyledWrapper>
      {currentUser ? "" : <Redirect to={routes.home} />}
    </>
  );
};

export default Header;
