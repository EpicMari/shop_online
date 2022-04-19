import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  ${({ button }) =>
    button &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.darkKhaki};
      margin-top: 5px;
      padding: 20px;
      width: 250px;
      text-align: center;
      color: ${({ theme }) => theme.colors.darkKhaki};
      transition: 0.3s ease-out;

      &:hover {
        background: ${({ theme }) => theme.colors.darkKhaki};
        color: ${({ theme }) => theme.colors.white};
      }

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin-top: 15px;
      }
    `}

  ${({ link }) =>
    link &&
    css`
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: ${({ theme }) => theme.fontSizes.s};

      &:hover {
        color: ${({ theme }) => theme.colors.darkKhaki};
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }
    `}
`;
