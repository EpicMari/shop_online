import React, { useContext } from "react";
import Ul from "../../atoms/Ul";
import RouterNavLink from "../../atoms/RouterNavLink";
import Li from "../../atoms/Li";
import { routes } from "../../../routes";
import RootContext from "../../../context/RootContext";
import Div from "../../atoms/Div";
import Button from "../../atoms/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Span from "../../atoms/Span";
import { auth } from "../../../firebase/firebaseConfig";
import { Redirect } from "react-router-dom";

const Header = () => {
  const { currentUser, handleCartOpen, menuToggle, onOffMenu, menuOff, cart } =
    useContext(RootContext);

  return (
    <>
      <Div headerWrapper>
        <Div headerWrapper__content>
          <Button buttonHeader onClickFn={handleCartOpen}>
            <ShoppingCartIcon />
            {cart.length >= 1 && (
              <Span headerAmountProductsInCart>{cart.length}</Span>
            )}
          </Button>
          <Div headerNavLink className={onOffMenu && "active"}>
            <Ul headerUl>
              <RouterNavLink to={routes.home} onClickFn={menuOff}>
                <Li headerLi>Home</Li>
              </RouterNavLink>
              <RouterNavLink to={routes.products} onClickFn={menuOff}>
                <Li headerLi>Products</Li>
              </RouterNavLink>
              <RouterNavLink to={routes.contact} onClickFn={menuOff}>
                <Li headerLi>Contact</Li>
              </RouterNavLink>
            </Ul>
            {currentUser ? (
              <Div headerUl__dropdown className="dropdown">
                <Button headerUl__dropdownBtn>User</Button>
                <Div headerUl__dropdownMenu>
                  <RouterNavLink
                    headerUl__dropdownLink
                    to={routes.orders}
                    onClickFn={menuOff}
                  >
                    Orders
                  </RouterNavLink>
                  <Button headerUl__signOut onClickFn={() => auth.signOut()}>
                    logout
                  </Button>
                </Div>
              </Div>
            ) : (
              <RouterNavLink
                headerUl__dropdownLink
                to={routes.login}
                onClickFn={menuOff}
              >
                Log In
              </RouterNavLink>
            )}
          </Div>
          <Button className="menuOff" buttonHeader onClickFn={menuToggle}>
            {onOffMenu ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </Div>
      </Div>
      {currentUser ? "" : <Redirect to={routes.home} />}
    </>
  );
};

export default Header;
