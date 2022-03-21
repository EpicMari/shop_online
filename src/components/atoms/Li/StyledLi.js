import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ isHeaderLi }) =>
    isHeaderLi &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: ${({ theme }) => theme.fontSizes.s};

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        margin-bottom: 0;
        padding: 0 10px 0;
      }
    `}

  ${({ isProductListItem }) =>
    isProductListItem &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 auto;
      padding: 10px;
    `}

    ${({ isCartProducts }) =>
    isCartProducts &&
    css`
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
      row-gap: 5px;
      place-items: center;
      padding: 10px 0;
      width: 100%;
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkKhaki};

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
    `}

    ${({ isFooterSocialItem }) => isFooterSocialItem && css``}

    ${({ paymentWrapper__cartItem }) =>
    paymentWrapper__cartItem &&
    css`
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
    `}
`;
