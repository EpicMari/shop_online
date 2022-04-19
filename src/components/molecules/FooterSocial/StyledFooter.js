import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  align-content: center;
  height: 85px;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkKhaki};
`;

export const StyledList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 10px;
`;

export const StyledListItem = styled.li`
  display: grid;
`;

export const StyledLink = styled.a`
  padding: 10px;
  color: white;
`;
