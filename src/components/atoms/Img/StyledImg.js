import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  ${({ isProductImg }) =>
    isProductImg &&
    css`
      height: 150px;
      width: 250px;
      margin-bottom: 15px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s linear;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        &:hover {
          transform: scale(1.1);
        }
      }

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        height: 200px;
        width: 300px;
      }
    `}

  ${({ singleProductImg }) =>
    singleProductImg &&
    css`
      width: 100%;
      max-width: 600px;
      margin-bottom: 15px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        margin: 0;
        /* grid-area: 1 / 1; */
      }
    `}

  ${({ isCartImg }) =>
    isCartImg &&
    css`
      width: 70px;
      height: 70px;
    `}

  ${({ isHomeMainImg }) =>
    isHomeMainImg &&
    css`
      width: 100%;
      max-height: 420px;
      object-fit: cover;
      object-position: bottom;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        max-width: 1200px;
      }
    `}

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

    ${({ isHomeAbout }) =>
    isHomeAbout &&
    css`
      width: 100%;
      height: 350px;
      object-fit: cover;
      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin-right: 90px;
        width: 50%;
      }
    `}
    ${({ isCycleStyle }) =>
    isCycleStyle &&
    css`
      margin-top: 20px;
      width: 100%;
      height: 350px;
      object-fit: cover;

      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        object-position: top;
      }
      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin-top: 0;
        margin-left: 90px;
        width: 50%;
      }
    `}
`;
