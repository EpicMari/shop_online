import React from "react";
import { StyledCheckboxMaterial } from "./StyledCheckbox";

const Checkbox = ({ color, name, checked, onChange }) => {
  return (
    <StyledCheckboxMaterial
      color={color}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
