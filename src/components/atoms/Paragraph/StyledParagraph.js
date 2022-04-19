import styled, { css } from "styled-components";

export const P = styled.p`
  font-weight: ${({ weight }) => (weight === "bold" ? 700 : 400)};
  font-size: ${({ size, theme }) =>
    size === "s"
      ? theme.fontSizes.s
      : size === "m"
      ? theme.fontSizes.m
      : size === "l"
      ? theme.fontSizes.l
      : size === "xl"
      ? theme.fontSizes.xl
      : theme.fontSizes.xs};

  color: ${({ color, theme }) =>
    color === "gold"
      ? theme.colors.darkKhaki
      : color === "blue"
      ? theme.colors.darkBlue
      : theme.colors.black};

  ${({ totalCostCart }) =>
    totalCostCart &&
    css`
      text-align: right;
      margin: 15px 0 40px;
    `}
`;
