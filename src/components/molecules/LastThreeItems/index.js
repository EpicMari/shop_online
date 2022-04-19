import React from "react";
import Div from "../../atoms/Div";
import Img from "../../atoms/Img";
import RouterNavLink from "../../atoms/RouterNavLink";

const LastThreeItems = ({ productsArray }) => {
  return (
    <Div lastThreeNewItems>
      {productsArray.map((item, i) => {
        return (
          i < 3 && (
            <RouterNavLink
              key={item.name}
              to={{
                pathname: `/product/${item.name.replace(/\s/g, "")}`,
                state: {
                  ...item,
                },
              }}
            >
              <Img newArrivalsImg src={item.image} alt={item.name} />
            </RouterNavLink>
          )
        );
      })}
    </Div>
  );
};

export default LastThreeItems;
