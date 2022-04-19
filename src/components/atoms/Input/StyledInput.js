import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";

export const StyledInputMaterial = styled(TextField)`
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  & .MuiInput-underline:after {
    border-color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${({ form }) =>
    form &&
    css`
      width: 100%;
      margin-top: 20px;
    `}
`;
