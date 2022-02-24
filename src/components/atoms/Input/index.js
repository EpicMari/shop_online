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
  loginInput,
  registerInput,
  contactInput,
  searchInput,
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
      loginInput={loginInput}
      registerInput={registerInput}
      contactInput={contactInput}
      searchInput={searchInput}
    />
  ) : (
    <input type={type} />
  );
};

export default Input;
