import React from "react";
import { StyledInputMaterial } from "./StyledInput";

const Input = ({
  inputType,
  label,
  type = "text",
  multiline,
  rows,
  name,
  value,
  onChangeFn,
  form,
}) => {
  return inputType === "material" ? (
    <StyledInputMaterial
      label={label}
      type={type}
      multiline={multiline}
      rows={rows}
      name={name}
      value={value}
      onChange={onChangeFn}
      form={form}
    />
  ) : (
    <input type={type} />
  );
};

export default Input;
