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
`;
