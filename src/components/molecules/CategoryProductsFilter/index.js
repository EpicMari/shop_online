import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import RootContext from "../../../context/RootContext";
import { Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const CategoryProductsFilter = () => {
  const { categorySelectValue, handleCategorySelectValue, initialProducts } =
    useContext(RootContext);
  const productCategories = [
    "all",
    ...new Set(initialProducts.map((product) => product.category)),
  ];
  return (
    <>
      <FormControl>
        <InputLabel id="categoryFilterLabel">Category filter: </InputLabel>
        <Select
          labelId="categoryFilterLabel"
          id="categoryFilter"
          value={categorySelectValue}
          onChange={handleCategorySelectValue}
          style={{ height: "50px" }}
        >
          {productCategories.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CategoryProductsFilter;
