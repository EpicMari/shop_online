import styled, { css } from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const StyledIconBtn = styled(IconButton)`
  ${({ isCloseModal }) =>
    isCloseModal &&
    css`
      position: absolute;
      top: 2.5px;
      right: 7.5px;
    `}

  ${({ isDeleteItem }) =>
    isDeleteItem &&
    css`
      grid-column: 3;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-column: 5;
      }
    `}
`;
