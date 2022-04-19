import React, { useContext } from "react";
import RootContext from "../../../context/RootContext";
import { listsTypes } from "../../../types/listsTypes";
import Button from "../../atoms/Button";
import RouterNavLink from "../../atoms/RouterNavLink";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import {
  StyledImageBox,
  StyledImageCart,
  StyledImageProducts,
  StyledParagraphPrice,
  StyledParagraphQuantity,
  StyledPlusMinusBox,
  StyledProductName,
  StyledProductNameCart,
} from "./StyledProductListItem";
import { IconButton } from "@material-ui/core";

const ProductListItem = ({
  name,
  id,
  price,
  inCartQuantity,
  quantity,
  listType,
  image,
  description,
}) => {
  const {
    addProductToCart,
    deleteProductFromCart,
    handleProductQuantityInCart,
  } = useContext(RootContext);

  const renderProductsList = () => (
    <>
      {listType === listsTypes.products ? (
        <>
          <RouterNavLink
            to={{
              pathname: `/product/${name.replace(/\s/g, "")}`,
              state: {
                name,
                id,
                price,
                inCartQuantity,
                quantity,
                listType,
                image,
                description,
              },
            }}
          >
            <StyledProductName>{name}</StyledProductName>
            <StyledImageProducts src={image} alt={name} />
          </RouterNavLink>
          <StyledParagraphPrice size="s">{price}$</StyledParagraphPrice>
        </>
      ) : (
        <>
          <StyledImageBox>
            <RouterNavLink to={`/product/${name.replace(/\s/g, "")}`}>
              <StyledImageCart src={image} alt={name} />
            </RouterNavLink>
          </StyledImageBox>
          <StyledProductNameCart headingType="h2">{name}</StyledProductNameCart>
          <StyledParagraphPrice>{price}$</StyledParagraphPrice>
        </>
      )}
      {renderButton()}
    </>
  );
  const renderButton = () => (
    <>
      {listType === listsTypes.cart ? (
        <>
          <StyledPlusMinusBox>
            <IconButton
              aria-label="Delete"
              disabled={inCartQuantity <= 1}
              onClick={() => handleProductQuantityInCart(id, "decrease")}
            >
              <RemoveIcon />
            </IconButton>
            <StyledParagraphQuantity size="s">
              {inCartQuantity}
            </StyledParagraphQuantity>
            <IconButton
              aria-label="Add"
              disabled={quantity === inCartQuantity}
              onClick={() => addProductToCart(id)}
            >
              <AddIcon />
            </IconButton>
          </StyledPlusMinusBox>
          <IconButton onClick={() => deleteProductFromCart(id)}>
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Button
            onClickFn={() => {
              addProductToCart(id);
            }}
            disabled={quantity <= inCartQuantity}
            button
            responsive
            animation
          >
            add to cart
          </Button>
        </>
      )}
    </>
  );

  return <>{renderProductsList()}</>;
};

export default ProductListItem;
