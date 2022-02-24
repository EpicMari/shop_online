import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
  ${({ isBtnCartContent }) =>
    isBtnCartContent &&
    css`
      svg {
        font-size: 1.2rem;
      }
    `}
  ${({ isHeaderAmountProductsInCart }) =>
    isHeaderAmountProductsInCart &&
    css`
      position: absolute;
      bottom: 11px;
      right: 52px;
      width: 10px;
      padding: 2px 6px;
      border-radius: 8px;
      box-sizing: content-box;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.darkKhaki};
      transition: transform 0.3s 0.1s linear;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        transform: translateX(52px);
      }
    `}
`;
