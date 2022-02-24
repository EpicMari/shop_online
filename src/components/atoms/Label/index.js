import React from "react";
import InputLabel from "@material-ui/core/InputLabel";

const Label = ({ labelType, children, id }) => {
  return labelType === "material" ? (
    <InputLabel id={id}>{children}</InputLabel>
  ) : (
    <label>{children}</label>
  );
};

export default Label;
