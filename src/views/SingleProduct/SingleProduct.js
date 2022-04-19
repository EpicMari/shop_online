import React, { useContext } from "react";
import RootContext from "../../context/RootContext";
import {
  StyledButton,
  StyledHeading,
  StyledImg,
  StyledParagraphDescription,
  StyledParagraphPrice,
  StyledWrapper,
  StyledWrapperContent,
} from "./StyledSingleProduct";

const SingleProduct = ({
  location: {
    state: { name, image, description, id, price, inCartQuantity, quantity },
  },
}) => {
  const { addProductToCart } = useContext(RootContext);

  return (
    <StyledWrapper>
      <StyledWrapperContent>
        <StyledHeading>{name}</StyledHeading>
        <StyledImg src={image} alt={name} />
        <StyledParagraphDescription>{description}</StyledParagraphDescription>
        <StyledParagraphPrice>{price}$</StyledParagraphPrice>
        <StyledButton
          onClickFn={() => {
            addProductToCart(id);
          }}
          disabled={quantity <= inCartQuantity}
          button
          contained
          responsive
          single
        >
          add to cart
        </StyledButton>
      </StyledWrapperContent>
    </StyledWrapper>
  );
};

export default SingleProduct;
