import React from "react";
import { StyledIconBtn } from "./StyledIconBtn";

const IconButton = ({ children, closeModal, onClickFn, deleteItem }) => {
  return (
    <StyledIconBtn
      isCloseModal={closeModal}
      isDeleteItem={deleteItem}
      onClick={onClickFn}
    >
      {children}
    </StyledIconBtn>
  );
};

export default IconButton;
