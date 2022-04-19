import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  ${({ isNewArrivalsImg }) =>
    isNewArrivalsImg &&
    css`
      height: 200px;
      width: 300px;
      margin: 10px 0;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin: 0 10px 0;
      }
    `}
`;
