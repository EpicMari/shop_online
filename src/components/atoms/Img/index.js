import React from "react";
import { StyledImg } from "./StyledImg";

const Img = ({
  src,
  alt,
  productImg,
  homeMainImg,
  cartImg,
  newArrivalsImg,
  homeAbout,
  cycleStyle,
  className,
  singleProductImg,
}) => {
  return (
    <StyledImg
      className={className}
      isProductImg={productImg}
      isHomeMainImg={homeMainImg}
      isCartImg={cartImg}
      isNewArrivalsImg={newArrivalsImg}
      isHomeAbout={homeAbout}
      isCycleStyle={cycleStyle}
      singleProductImg={singleProductImg}
      src={src}
      alt={alt}
    />
  );
};

export default Img;
