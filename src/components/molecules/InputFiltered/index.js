import React, { useContext } from "react";
import RootContext from "../../../context/RootContext";
import Input from "../../atoms/Input";

const InputFiltered = () => {
  const { productNameInputValue, handleInputValue } = useContext(RootContext);
  return (
    <Input
      label="Search bike"
      value={productNameInputValue}
      onChangeFn={handleInputValue}
      inputType="material"
      searchInput
    />
  );
};

export default InputFiltered;
