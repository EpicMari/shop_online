import React, { useContext } from "react";
import Heading from "../components/atoms/Heading";
import Img from "../components/atoms/Img";
import Paragraph from "../components/atoms/Paragraph";
import Button from "../components/atoms/Button";
import RootContext from "../context/RootContext";
import Div from "../components/atoms/Div";
import { useSnackbar } from "notistack";

const SingleProduct = ({
  location: {
    state: { name, image, description, id, price, inCartQuantity, quantity },
  },
}) => {
  const { addProductToCart } = useContext(RootContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Product add to cart");
  };
  return (
    <Div singleProductWrapper>
      <Heading productListItem headingType="h2">
        {name}
      </Heading>
      <Img singleProductImg src={image} alt={name} />
      <Paragraph productDescription>{description}</Paragraph>
      <Paragraph priceItem className="singleProduct">
        {price}$
      </Paragraph>
      <Button
        onClickFn={() => {
          addProductToCart(id);
          handleClick();
        }}
        disabled={quantity <= inCartQuantity}
        btnType="material"
        color="primary"
        variant="contained"
        className="responsiveBtn singleProductBtn"
      >
        add to cart
      </Button>
    </Div>
  );
};

export default SingleProduct;