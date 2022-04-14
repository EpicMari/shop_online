import React from "react";
import Img from "../../atoms/Img";
import Li from "../../atoms/Li";
import Paragraph from "../../atoms/Paragraph";
import Ul from "../../atoms/Ul";

const CartOrder = ({ cartItems }) => {
  return (
    <Ul>
      {cartItems.map((item) => {
        return (
          <Li paymentWrapper__cartItem>
            <Img cartImg src={item.image} alt={item.name} />
            <Paragraph paymentWrapper__cartItemName>
              {item.name} {item.price * item.inCartQuantity}$
            </Paragraph>
          </Li>
        );
      })}
    </Ul>
  );
};

export default CartOrder;
