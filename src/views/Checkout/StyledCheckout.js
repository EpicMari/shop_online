import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  max-width: 1400px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr auto auto;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    height: 100vh;
    margin: 0 auto;
  }
`;

export const StyledContentBox = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 400px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 1 / 3 / 1;
    margin: 0 20px;
  }
`;

export const StyledInfoBox = styled.div``;

export const StyledDeliveryBox = styled.div`
  margin: 20px 0 10px;
`;

export const StyledCostBox = styled.div`
  margin: 20px 0;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 2 / 2;
    margin: 0;
  }
`;
