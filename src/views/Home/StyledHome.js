import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0 20px;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    margin: 40px 0 0;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  object-position: bottom;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    max-width: 1200px;
  }
`;

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  font-weight: 400;
  margin: 20px 0 10px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    margin: 20px 0;
  }
`;

export const SentenceBox = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20px;
  height: 150px;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const CycleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    flex-direction: row-reverse;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    width: 350px;
  }
`;

export const StyledAboutImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    margin-right: 90px;
    width: 50%;
  }
`;

export const StyledCycleImage = styled.img`
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
`;

export const StyledHeadingContent = styled.h2`
  margin: 10px 0;
  font-weight: 400;
  width: 250px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.darkKhaki};

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    text-align: start;
  }
`;
