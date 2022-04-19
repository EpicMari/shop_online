import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  StyledLink,
  StyledList,
  StyledListItem,
  StyledWrapper,
} from "./StyledFooter";

const FooterSocial = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StyledListItem>
          <StyledLink href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://youtube.com" target="_blank">
            <YouTubeIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://pinterest.com" target="_blank">
            <PinterestIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default FooterSocial;
