import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Paragraph from "../../atoms/Paragraph";
import { NavLink } from "react-router-dom";

export const StyledHeadingAlert = styled.h1`
  text-align: center;
`;

export const StyledCloseIcon = styled(IconButton)`
  position: absolute;
  top: 2.5px;
  right: 7.5px;
`;

export const StyledHeadingName = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkKhaki};
`;

export const StyledParagraphCost = styled(Paragraph)`
  text-align: right;
  margin: 15px 0 40px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledNavLinkButton = styled(NavLink)``;
