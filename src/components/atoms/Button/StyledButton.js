import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;

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
`;
