import styled, { css } from "styled-components";

export const StyledALink = styled.a`
  ${({ isFooterSocialLink }) =>
    isFooterSocialLink &&
    css`
      color: white;
      padding: 10px;
    `}
`;
