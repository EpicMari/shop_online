import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";

export const StyledWrapper = styled.div`
  max-width: 1400px;
  margin: 20px auto 0;
  padding: 0 10px;
  min-height: calc(100vh - 56px - 85px);

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    padding: 0;
  }
`;

export const StyledContentBox = styled.div`
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StyledInfoBox = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  height: fit-content;
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
  }
`;

export const StyledCartBox = styled.div`
  margin: 15px 0 20px 0;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    grid-area: 1 / 2 / 1 / 2;
    margin: 0;
    justify-self: center;
  }
`;

export const StyledPaypalBox = styled.div`
  position: relative;
  z-index: 0;
  padding: 0 20px;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    width: 400px;
    padding: 0;
    grid-area: 2 / 1 / 2 / 3;
    align-self: center;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
`;

export const StyledPaymentHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledAddress = styled(Heading)``;

export const StyledCartTotalInfo = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 10px;
  text-align: center;
`;
