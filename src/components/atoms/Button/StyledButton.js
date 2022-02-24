import styled, { css } from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";

export const StyledButton = styled.button`
  /* color: ${({ color }) => color}; */
  background: none;
  outline: none;
  border: none;
  /* padding: 20px; */

  ${({ isButtonHeader }) =>
    isButtonHeader &&
    css`
      z-index: 999;
      padding: 10px;
      transition: transform 0.3s 0.1s linear;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        /* margin-right: 300px; */
        transform: translateX(-360px);
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
      .headerUl__dropdown
        > &.headerUl__dropdownBtn:focus
        + .headerUl__dropdownMenu {
        opacity: 1;
        transform: translateY(0);
        /* pointer-events: all; */
      }

      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: 1.2rem;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        margin-bottom: 0;
        padding: 0 10px 0;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
      }
    `}

    ${({ headerUl__signOut }) =>
    headerUl__signOut &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: 1.2rem;
      margin-top: 10px;

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
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
