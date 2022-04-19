import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
`;

export const StyledListItemCart = styled.li`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  row-gap: 5px;
  place-items: center;
  padding: 10px 0;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkKhaki};

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const StyledListItemProduct = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    padding: 30px;
  }
`;
