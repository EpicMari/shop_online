import styled, { css } from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  ${({ headingHomeNewItems }) =>
    headingHomeNewItems &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.darkBlue};
      font-weight: 400;
      margin: 20px 0 10px;
      width: 100%;
    `}

  ${({ emptyCart }) =>
    emptyCart &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
      }
    `}
`;
export const H2 = styled.h2`
  ${({ loginHeading }) =>
    loginHeading &&
    css`
      text-align: center;
      margin: 20px 0;
      font-size: ${({ theme }) => theme.fontSizes.l};
    `}
  ${({ registerHeading }) =>
    registerHeading &&
    css`
      text-align: center;
      margin: 20px 0;
      font-size: ${({ theme }) => theme.fontSizes.l};
    `}

    ${({ productListItem }) =>
    productListItem &&
    css`
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.darkBlue};

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-row: 1;
        grid-column: 1 / 3;
      }
    `}

    ${({ productInCart }) =>
    productInCart &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xs};
      @media (min-width: ${({ theme }) => theme.devices.tabletXl}) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }
    `}

    ${({ cartHeading }) =>
    cartHeading &&
    css`
      color: ${({ theme }) => theme.colors.darkBlue};
      padding-bottom: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkKhaki};
    `}

    ${({ homeHeadingAbout }) =>
    homeHeadingAbout &&
    css`
      margin: 10px 0;
      font-weight: 400;
      width: 250px;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      letter-spacing: 3px;
      color: ${({ theme }) => theme.colors.darkKhaki};

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        text-align: start;
      }
    `}
`;
export const H3 = styled.h3`
  ${({ paymentWrapper__heading }) =>
    paymentWrapper__heading &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.l};
      text-align: center;
      margin-bottom: 20px;
    `}
`;
export const H4 = styled.h4``;
export const H5 = styled.h5`
  ${({ paymentWrapper__orderValue }) =>
    paymentWrapper__orderValue &&
    css`
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.m};
      margin-top: 10px;
    `}
`;
export const H6 = styled.h6`
  ${({ paymentWrapper__description }) =>
    paymentWrapper__description &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
    `}
`;
