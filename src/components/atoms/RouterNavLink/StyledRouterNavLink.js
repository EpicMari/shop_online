import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  ${({ isToProductsHome }) =>
    isToProductsHome &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.darkKhaki};
      margin-top: 10px;
      padding: 20px;
      width: 250px;
      text-align: center;
      color: ${({ theme }) => theme.colors.darkKhaki};
      transition: 0.3s ease-out;

      &:hover {
        background: ${({ theme }) => theme.colors.darkKhaki};
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ isCheckoutCart }) =>
    isCheckoutCart &&
    css`
      position: absolute;
      right: 15px;
      bottom: 25px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        right: 10px;
        bottom: 20px;
      }
    `}
`;
