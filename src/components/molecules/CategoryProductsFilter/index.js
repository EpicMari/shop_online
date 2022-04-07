import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import RootContext from "../../../context/RootContext";
import { Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

const CategoryProductsFilter = () => {
  const { categorySelectValue, handleCategorySelectValue, initialProducts } =
    useContext(RootContext);
  const productCategories = [
    "all",
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  const CustomInputLabel = withStyles({
    root: {
      "&.MuiFormLabel-root.Mui-focused": {
        color: "#b99867",
      },
    },
  })(InputLabel);

  return (
    <>
      <FormControl>
        <CustomInputLabel id="categoryFilterLabel">
          Category filter:
        </CustomInputLabel>
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
