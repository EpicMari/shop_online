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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Span from "../../atoms/Span";
import { auth } from "../../../firebase/firebaseConfig";
import { Redirect } from "react-router-dom";

const Header = () => {
  const { currentUser, handleCartOpen, menuToggle, onOffMenu, menuOff, cart } =
    useContext(RootContext);

  return (
    <>
      <Div headerWrapper>
        <Div headerNavLink className={onOffMenu && "active"}>
          <Ul headerUl>
            {currentUser ? (
              <Div headerUl__dropdown className="headerUl__dropdown">
                <Button headerUl__dropdownBtn className="headerUl__dropdownBtn">
                  User
                </Button>
                <Div headerUl__dropdownMenu className="headerUl__dropdownMenu">
                  <RouterNavLink to={routes.orders} onClickFn={menuOff}>
                    <Li headerLi>Orders</Li>
                  </RouterNavLink>
                  <Button headerUl__signOut onClickFn={() => auth.signOut()}>
                    Sign Out
                  </Button>
                </Div>
              </Div>
            ) : (
              <RouterNavLink to={routes.login} onClickFn={menuOff}>
                <Li headerLi>Log In</Li>
              </RouterNavLink>
            )}

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
        </Div>
        <Button buttonHeader onClickFn={handleCartOpen}>
          <ShoppingCartIcon />
          {cart.length >= 1 && (
            <Span headerAmountProductsInCart>{cart.length}</Span>
          )}
        </Button>
        <Button className="menuOff" buttonHeader onClickFn={menuToggle}>
          {onOffMenu ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Div>
      {currentUser ? "" : <Redirect to={routes.home} />}
    </>
  );
};

export default Header;
