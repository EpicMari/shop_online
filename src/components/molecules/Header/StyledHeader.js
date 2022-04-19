import styled from "styled-components";
import Button from "../../atoms/Button";

export const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkBlue};
`;

export const StyledContentBox = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledNavigation = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  transform: translateX(100%);
  transition: transform 0.3s 0.1s linear;
  &.active {
    transform: translateX(0);
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    flex-direction: row;
    top: 0;
    width: fit-content;
    transform: translateX(0);
    height: 56px;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const StyledDropdownBox = styled.div`
  position: relative;
`;

export const StyledDropdownMenuBox = styled.div`
  display: none;
  position: absolute;
  right: -50%;
  text-align: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  .dropdown:hover & {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    right: 0;
  }
`;

export const StyledList = styled.ul`
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    display: flex;
    place-items: center;
  }
`;

export const StyledListItem = styled.li`
  margin: 20px 0;
  text-align: center;

  &:last-of-type {
    margin-bottom: 10px;
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    margin: 0;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const StyledButton = styled(Button)`
  z-index: 999;
  padding: 10px;
  transition: transform 0.3s 0.1s linear;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    transform: translateX(-340px);
  }

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.darkKhaki};
  }

  &.menuOff {
    @media (min-width: ${({ theme }) => theme.devices.laptop}) {
      display: none;
    }
  }
`;

export const StyledSpanAmount = styled.span`
  position: absolute;
  bottom: 15px;
  right: 60px;
  height: 20px;
  width: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.darkKhaki};
  transition: transform 0.3s 0.1s linear;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    transform: translateX(52px);
  }
`;

export const StyledDropdownButton = styled(Button)`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    padding: 0 10px 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.darkKhaki};
  }
`;

export const StyledSignOutButton = styled(Button)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding: 10px;
  margin-top: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.darkKhaki};
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
