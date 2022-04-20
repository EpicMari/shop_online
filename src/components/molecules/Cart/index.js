import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../../context/RootContext";
import ProductsList from "../ProductsList";
import { listsTypes } from "../../../types/listsTypes";
import Div from "../../atoms/Div";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../../atoms/Button";
import { routes } from "../../../routes";
import {
  StyledCloseIcon,
  StyledHeadingAlert,
  StyledHeadingName,
  StyledNavLinkButton,
  StyledParagraphCost,
} from "./StyledCart";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  paper: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "24px 20px 24px",
    margin: "0 10px",
    borderRadius: "20px",
    overflowY: "auto",
    width: "90vw",
    maxWidth: "800px",
    maxHeight: "80vh",
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
          <StyledCloseIcon onClick={handleCartClose}>
            <CloseIcon />
          </StyledCloseIcon>
          {cart.length !== 0 ? (
            <>
              <StyledHeadingName id="transition-modal-title">
                Cart
              </StyledHeadingName>
              <ProductsList productsArray={cart} listType={listsTypes.cart} />
              <StyledParagraphCost>Total: {cartTotal}$</StyledParagraphCost>
              <StyledNavLinkButton
                to={routes.checkout}
                onClick={handleCartClose}
              >
                <Button button contained responsive>
                  Checkout
                </Button>
              </StyledNavLinkButton>
            </>
          ) : (
            <StyledHeadingAlert headingType="h1">
              Your cart is empty
            </StyledHeadingAlert>
          )}
        </Div>
      </Fade>
    </Modal>
  );
};

export default Cart;
