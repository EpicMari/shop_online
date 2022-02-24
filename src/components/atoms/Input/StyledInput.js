import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";

export const StyledInputMaterial = styled(TextField)`
  ${({ loginInput }) =>
    loginInput &&
    css`
      width: 100%;
      margin-top: 20px;
    `}
  ${({ registerInput }) =>
    registerInput &&
    css`
      width: 100%;
      margin-top: 20px;
    `}
  ${({ contactInput }) =>
    contactInput &&
    css`
      width: 100%;
      margin-top: 20px;
    `}
  ${({ searchInput }) =>
    searchInput &&
    css`
      display: flex;
      margin: 0 auto;
      width: 50%;
      max-width: 250px;
      margin-top: 20px;
    `}
`;
