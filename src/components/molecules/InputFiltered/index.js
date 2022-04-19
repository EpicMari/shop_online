import React, { useContext } from "react";
import RootContext from "../../../context/RootContext";
import { StyledInput } from "./StyledInputFiltered";

const InputFiltered = () => {
  const { productNameInputValue, handleInputValue } = useContext(RootContext);
  return (
    <StyledInput
      label="Search bike"
      value={productNameInputValue}
      onChange={handleInputValue}
    />
  );
};

export default InputFiltered;
