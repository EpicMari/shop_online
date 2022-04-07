import styled, { css } from "styled-components";

export const P = styled.p`
  ${({ isNewCustomer }) =>
    isNewCustomer &&
    css`
      margin-top: 20px;
      text-align: center;
    `}
  ${({ forgottenPassword }) =>
    forgottenPassword &&
    css`
      text-align: center;
      font-weight: bold;
      text-decoration: underline;
    `}


  ${({ isPriceItem }) =>
    isPriceItem &&
    css`
      margin-bottom: 15px;

      &.singleProduct {
        @media (min-width: ${({ theme }) => theme.devices.laptop}) {
          grid-area: 3 / 2;
        }
      }
    `}

  ${({ registerTerms }) => registerTerms && css``}
  ${({ homeSentence }) =>
    homeSentence &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.l};
      color: ${({ theme }) => theme.colors.darkKhaki};
    `}

    ${({ paragraphInHome }) =>
    paragraphInHome &&
    css`
      width: 250px;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        width: 350px;
      }
    `}

    ${({ priceItemInCart }) =>
    priceItemInCart &&
    css`
      grid-area: 2 / 3 / auto / auto;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 1 / 4;
      }
    `}

    ${({ showCartQuantityItem }) =>
    showCartQuantityItem &&
    css`
      text-align: center;
      width: 25px;
    `}

    ${({ totalCostCart }) =>
    totalCostCart &&
    css`
      text-align: right;
      margin: 15px 0 40px;
    `}

    ${({ productDescription }) =>
    productDescription &&
    css`
      width: 90%;
      text-align: center;
      max-width: 360px;
      margin-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xs};

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.s};
      }
    `}

    ${({ paymentWrapper__text }) =>
    paymentWrapper__text &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.s};
      margin-top: 10px;
    `}

    ${({ paymentWrapper__cartItemName }) =>
    paymentWrapper__cartItemName &&
    css`
      margin-left: 10px;
    `}
`;
