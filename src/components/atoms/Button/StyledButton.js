import styled, { css } from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";

export const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;

  ${({ isButtonHeader }) =>
    isButtonHeader &&
    css`
      z-index: 999;
      padding: 10px;
      transition: transform 0.3s 0.1s linear;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        transform: translateX(-340px);
      }

      svg {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.darkKhaki};
      }

      &.menuOff {
        @media (min-width: ${({ theme }) => theme.devices.laptop}) {
          display: none;
        }
      }
    `}

  ${({ isBtnInCart }) =>
    isBtnInCart &&
    css`
      height: 20px;
      width: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      border-radius: 25%;
      svg {
        font-size: 1rem;
      }
    `}

    
    ${({ headerUl__dropdownBtn }) =>
    headerUl__dropdownBtn &&
    css`
      width: 100%;
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: ${({ theme }) => theme.fontSizes.s};

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        padding: 0 10px 0;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
      }
    `}

    ${({ headerUl__signOut }) =>
    headerUl__signOut &&
    css`
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: ${({ theme }) => theme.fontSizes.s};
      padding: 10px;
      margin-top: 10px;

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }
    `}

    ${({ button }) =>
    button &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.darkKhaki};
      padding: 10px 20px;
      text-align: center;
      color: ${({ theme }) => theme.colors.darkKhaki};
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
      transition: 0.3s ease-out;

      &:disabled {
        background-color: grey;
      }
    `}

    ${({ animation }) =>
    animation &&
    css`
      &:hover {
        background: ${({ theme }) => theme.colors.darkKhaki};
        color: ${({ theme }) => theme.colors.white};
      }
    `}

    ${({ responsive }) =>
    responsive &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: 14px;
      }
    `}

    ${({ contained }) =>
    contained &&
    css`
      background: ${({ theme }) => theme.colors.darkKhaki};
      color: ${({ theme }) => theme.colors.white};
      }
    `}

    ${({ loginBtn }) =>
    loginBtn &&
    css`
      margin: 20px 0;
    `}

    ${({ singleProductBtn }) =>
    singleProductBtn &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 4 / 2;
      }
    `}
`;
export const StyledButtonMaterial = styled(MaterialButton)`
  &.responsiveBtn {
    font-size: 60%;

    @media (min-width: ${({ theme }) => theme.devices.laptop}) {
      font-size: 87.5%;
    }
  }

  &.singleProductBtn {
    @media (min-width: ${({ theme }) => theme.devices.laptop}) {
      grid-area: 4 / 2;
    }
  }

  &.checkoutBtn {
    margin-top: 10px;
    @media (min-width: ${({ theme }) => theme.devices.laptop}) {
      margin: 10px 0;
    }
  }

  ${({ loginBtn }) =>
    loginBtn &&
    css`
      width: 100%;
      margin: 20px 0;
    `}

  ${({ registerBtn }) =>
    registerBtn &&
    css`
      width: 100%;
      margin: 20px 0;
    `}
  ${({ contactBtn }) =>
    contactBtn &&
    css`
      width: 100%;
      margin: 20px 0;
    `}
`;
