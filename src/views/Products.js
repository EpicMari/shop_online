import React, { useContext } from "react";
import ModalFilter from "../components/molecules/ModalFilter";
import ProductsList from "../components/molecules/ProductsList";
import FilterMenu from "../components/organisms/FilterMenu";
import RootContext from "../context/RootContext";
import { listsTypes } from "../types/listsTypes";

const Products = () => {
  const { products } = useContext(RootContext);
  return (
    <>
      <FilterMenu />
      <ModalFilter />
      <ProductsList productsArray={products} listType={listsTypes.products} />
    </>
  );
};

export default Products;
