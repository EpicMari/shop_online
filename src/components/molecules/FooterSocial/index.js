import React from "react";
import Div from "../../atoms/Div";
import Ul from "../../atoms/Ul";
import Li from "../../atoms/Li";
import ALink from "../../atoms/ALink";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterSocial = () => {
  return (
    <Div footerSocial>
      <Ul footerSocial>
        <Li footerSocialItem>
          <ALink footerSocialLink href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </ALink>
        </Li>
        <Li footerSocialItem>
          <ALink footerSocialLink href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </ALink>
        </Li>
        <Li footerSocialItem>
          <ALink footerSocialLink href="https://youtube.com" target="_blank">
            <YouTubeIcon />
          </ALink>
        </Li>
        <Li footerSocialItem>
          <ALink footerSocialLink href="https://pinterest.com" target="_blank">
            <PinterestIcon />
          </ALink>
        </Li>
        <Li footerSocialItem>
          <ALink footerSocialLink href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </ALink>
        </Li>
      </Ul>
    </Div>
  );
};

export default FooterSocial;
