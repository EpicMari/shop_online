import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../../context/RootContext";
import ProductsList from "../ProductsList";
import { listsTypes } from "../../../types/listsTypes";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "../../atoms/IconButton";
import Button from "../../atoms/Button";
import { routes } from "../../../routes";
import RouterNavLink from "../../atoms/RouterNavLink";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "24px 20px 24px",
    margin: "0 10px",
    borderRadius: "20px",
    overflowY: "auto",
    width: "90vw",
    maxWidth: "800px",
    position: "absolute",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { isCartOpen, handleCartClose, cart, cartTotal } =
    useContext(RootContext);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isCartOpen}
      onClose={handleCartClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartOpen}>
        <Div className={classes.paper}>
          <IconButton closeModal onClickFn={handleCartClose}>
            <CloseIcon />
          </IconButton>
          {cart.length !== 0 ? (
            <>
              <Heading cartHeading headingType="h2" id="transition-modal-title">
                Cart
              </Heading>
              <ProductsList productsArray={cart} listType={listsTypes.cart} />
              <Paragraph totalCostCart>Total: {cartTotal}$</Paragraph>
              <RouterNavLink
                to={routes.checkout}
                onClickFn={handleCartClose}
                checkoutCart
              >
                <Button button contained responsive>
                  Checkout
                </Button>
              </RouterNavLink>
            </>
          ) : (
            <Heading headingType="h1" emptyCart>
              Your cart is empty
            </Heading>
          )}
        </Div>
      </Fade>
    </Modal>
  );
};

export default Cart;
