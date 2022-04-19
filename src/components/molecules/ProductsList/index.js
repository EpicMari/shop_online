import React from "react";
import ProductListItem from "../ProductListItem";
import { listsTypes } from "../../../types/listsTypes";
import {
  StyledList,
  StyledListItemCart,
  StyledListItemProduct,
  StyledWrapper,
} from "./ProductsList";

const ProductsList = ({ productsArray, listType }) => {
  return (
    <StyledWrapper>
      <StyledList>
        {productsArray.map((product) => {
          return listType === listsTypes.cart ? (
            <StyledListItemCart key={product.id}>
              <ProductListItem {...product} listType={listType} />
            </StyledListItemCart>
          ) : (
            <StyledListItemProduct key={product.id}>
              <ProductListItem {...product} listType={listType} />
            </StyledListItemProduct>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
};

export default ProductsList;
