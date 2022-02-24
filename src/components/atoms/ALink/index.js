import React from "react";
import { StyledALink } from "./StyledALink";

const ALink = ({ children, href, target, footerSocialLink }) => {
  return (
    <StyledALink
      href={href}
      target={target}
      isFooterSocialLink={footerSocialLink}
    >
      {children}
    </StyledALink>
  );
};

export default ALink;
