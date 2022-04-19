import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
  ${({ isBtnCartContent }) =>
    isBtnCartContent &&
    css`
      svg {
        font-size: 1.2rem;
      }
    `}
`;
