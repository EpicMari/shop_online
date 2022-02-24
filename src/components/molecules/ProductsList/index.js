import React from "react";
import ProductListItem from "../ProductListItem";
import Li from "../../atoms/Li";
import Ul from "../../atoms/Ul";
import Div from "../../atoms/Div";
import { listsTypes } from "../../../types/listsTypes";

const ProductsList = ({ productsArray, listType }) => {
  console.log(productsArray, "PRODUCTS");
  return (
    <Div productsListWrapper>
      <Ul productsList>
        {productsArray.map((product) => {
          return listType === listsTypes.cart ? (
            <Li key={product.id} cartProducts>
              <ProductListItem {...product} listType={listType} />
            </Li>
          ) : (
            <Li key={product.id} productListItem>
              <ProductListItem {...product} listType={listType} />
            </Li>
          );
        })}
      </Ul>
    </Div>
  );
};

export default ProductsList;
