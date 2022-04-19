import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph";

export const StyledImageBox = styled.div`
  display: flex;
`;

export const StyledPlusMinusBox = styled.div`
  display: flex;
  align-items: center;
  grid-row: 2 / auto;
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 3;
  }
`;

export const StyledParagraphQuantity = styled(Paragraph)`
  text-align: center;
  width: 25px;
`;

export const StyledParagraphPrice = styled(Paragraph)`
  margin: 10px 0;
  grid-area: 2 / 3 / auto / auto;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 4;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledProductName = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 20px;
`;

export const StyledImageProducts = styled.img`
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
`;

export const StyledImageCart = styled.img`
  width: 70px;
  height: 70px;
`;

export const StyledProductNameCart = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  @media (min-width: ${({ theme }) => theme.devices.tabletXl}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
