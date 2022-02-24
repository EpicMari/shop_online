import React from "react";
import { StyledCheckboxMaterial } from "./StyledCheckbox";

const Checkbox = ({ color, name, checked, onChangeFn }) => {
  return (
    <StyledCheckboxMaterial
      color={color}
      name={name}
      checked={checked}
      onChange={onChangeFn}
    />
  );
};

export default Checkbox;
