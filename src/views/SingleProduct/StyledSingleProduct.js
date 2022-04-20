import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Paragraph from "../../components/atoms/Paragraph";

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkBlue};

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 1 / auto / 3;
  }
`;

export const StyledWrapper = styled.div`
  padding: 10rem 5%;
  display: grid;
  place-items: center;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    padding: 15rem 5%;
  }
`;

export const StyledWrapperContent = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
  max-width: 1200px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto auto auto;
  }
`;

export const StyledParagraphDescription = styled(Paragraph)`
  width: 90%;
  text-align: center;
  max-width: 360px;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledParagraphPrice = styled(Paragraph)`
  margin-bottom: 15px;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 3 / 2;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 15px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    margin: 0;
  }
`;

export const StyledButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 4 / 2;
  }
`;
