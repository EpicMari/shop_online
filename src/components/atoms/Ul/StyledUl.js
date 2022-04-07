import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
  ${({ isProductsList }) =>
    isProductsList &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      max-width: 1400px;
    `}

  ${({ isHeaderUl }) =>
    isHeaderUl &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        display: flex;
      }
    `}
  ${({ isFooterSocial }) =>
    isFooterSocial &&
    css`
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      grid-gap: 10px;
    `}
`;
