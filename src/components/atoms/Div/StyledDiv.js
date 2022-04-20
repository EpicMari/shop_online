import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ form }) =>
    form &&
    css`
      min-height: 100vh;
      padding: 20vh 20px;
      max-width: 400px;
      margin: 0 auto;
    `}

  ${({ terms }) =>
    terms &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      margin: 20px 0;
      left: -10px;
    `}

  

  ${({ headerWrapper__content }) =>
    headerWrapper__content &&
    css`
      display: flex;
      justify-content: flex-end;
      max-width: 1200px;
      margin: 0 auto;
    `}

    ${({ isLastThreeNewItems }) =>
    isLastThreeNewItems &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        flex-direction: row;
        justify-content: center;
      }
    `}
`;
