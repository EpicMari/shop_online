import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import RootContext from "../../../context/RootContext";

const PriceSlider = () => {
  const { priceRange, handlePriceRange, initialProducts } =
    useContext(RootContext);

  const productsPrices = initialProducts.map((product) => product.price);
  const maxPrice = Math.max(...productsPrices);
  const minPrice = Math.min(...productsPrices);
  return (
    <>
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        style={{ width: "200px", margin: "50px" }}
        value={priceRange}
        onChange={handlePriceRange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </>
  );
};

export default PriceSlider;
