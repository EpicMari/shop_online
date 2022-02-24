import React, { useContext } from "react";
import RootContext from "../../../context/RootContext";
import { listsTypes } from "../../../types/listsTypes";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Img from "../../atoms/Img";
import RouterNavLink from "../../atoms/RouterNavLink";
import Div from "../../atoms/Div";
import Span from "../../atoms/Span";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "../../atoms/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSnackbar } from "notistack";

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

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Product add to cart");
  };

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
            <Heading productListItem headingType="h2">
              {name}
            </Heading>
            <Img productImg src={image} alt={name} />
          </RouterNavLink>
          <Paragraph priceItem>{price}$</Paragraph>
        </>
      ) : (
        <>
          <Div cartImgHeadingWrapper>
            <RouterNavLink to={`/product/${name.replace(/\s/g, "")}`}>
              <Img cartImg src={image} alt={name} />
            </RouterNavLink>
          </Div>
          <Heading productInCart headingType="h2">
            {name}
          </Heading>
          <Paragraph priceItemInCart>{price}$</Paragraph>
        </>
      )}
      {renderButton()}
    </>
  );
  const renderButton = () => (
    <>
      {listType === listsTypes.cart ? (
        <>
          <Div plusMinusWrapper>
            <Button
              btnInCart
              disabled={inCartQuantity <= 1}
              onClickFn={() => handleProductQuantityInCart(id, "decrease")}
            >
              <Span btnCartContent>
                <RemoveIcon />
              </Span>
            </Button>
            <Paragraph showCartQuantityItem>{inCartQuantity}</Paragraph>
            <Button
              btnInCart
              disabled={quantity === inCartQuantity}
              onClickFn={() => addProductToCart(id)}
            >
              <Span btnCartContent>
                <AddIcon />
              </Span>
            </Button>
          </Div>
          <IconButton deleteItem onClickFn={() => deleteProductFromCart(id)}>
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Button
            onClickFn={() => {
              addProductToCart(id);
              handleClick();
            }}
            disabled={quantity <= inCartQuantity}
            btnType="material"
            color="primary"
            variant="contained"
            className="responsiveBtn"
          >
            add to cart
          </Button>
        </>
      )}
    </>
  );

  const renderSingleProduct = () => (
    <>
      {/* <Heading productListItem headingType="h2">
        {name}
      </Heading>
      <Img productImg src={image} alt={name} />
      <Paragraph>{description}</Paragraph>
      <Paragraph priceItem>{price}$</Paragraph> */}
      {/* {renderButton()} */}
    </>
  );

  return (
    <>
      {/* {listType === listsTypes.product
        ? renderSingleProduct()
        :  */}
      {renderProductsList()}
    </>
  );
};

export default ProductListItem;
