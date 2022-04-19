import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph";

export const StyledList = styled.ul``;

export const StyledListItem = styled.li`
  display: flex;
  place-items: center;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-top: 10px;
`;

export const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const StyledParagraphPrice = styled(Paragraph)`
  margin-left: 10px;
`;
