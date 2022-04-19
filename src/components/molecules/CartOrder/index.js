import React from "react";
import {
  StyledImg,
  StyledList,
  StyledListItem,
  StyledParagraphPrice,
} from "./StyledCartOrder";

const CartOrder = ({ cartItems }) => {
  return (
    <StyledList>
      {cartItems.map((item) => {
        return (
          <StyledListItem>
            <StyledImg src={item.image} alt={item.name} />
            <StyledParagraphPrice>
              {item.name} {item.price * item.inCartQuantity}$
            </StyledParagraphPrice>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default CartOrder;
