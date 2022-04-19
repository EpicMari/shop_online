import styled, { css } from "styled-components";

export const StyledH1 = styled.h1`
  ${({ emptyCart }) =>
    emptyCart &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
      }
    `}
`;
export const StyledH2 = styled.h2`
  ${({ cartHeading }) =>
    cartHeading &&
    css`
      color: ${({ theme }) => theme.colors.darkBlue};
      padding-bottom: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkKhaki};
    `}

  ${({ homeHeadingAbout }) => homeHeadingAbout && css``}
`;
export const StyledH3 = styled.h3`
  ${({ paymentWrapper__description }) =>
    paymentWrapper__description &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
      margin-top: 10px;
      text-align: center;
    `}
`;
export const StyledH4 = styled.h4``;
export const StyledH5 = styled.h5``;
export const StyledH6 = styled.h6`
  ${({ paymentWrapper__description }) =>
    paymentWrapper__description &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
    `}
`;
