import React, { useContext } from "react";
import mainImg from "../../assets/images/mainImg.jpg";
import aboutUsImg from "../../assets/images/aboutUs.jpg";
import cycleWithStyle from "../../assets/images/cycleWithStyle.jpg";
import RouterNavLink from "../../components/atoms/RouterNavLink";
import Paragraph from "../../components/atoms/Paragraph";
import { routes } from "../../routes/index";
import LastThreeItems from "../../components/molecules/LastThreeItems";
import RootContext from "../../context/RootContext";
import {
  AboutBox,
  ContentBox,
  CycleBox,
  SentenceBox,
  StyledAboutImage,
  StyledCycleImage,
  StyledHeading,
  StyledHeadingContent,
  StyledImg,
  StyledWrapper,
} from "./StyledHome";

const Home = () => {
  const { products } = useContext(RootContext);
  return (
    <StyledWrapper>
      <StyledImg src={mainImg} alt="Main image" />
      <StyledHeading headingType="h1" headingHomeNewItems>
        NEW ARRIVALS
      </StyledHeading>
      <LastThreeItems productsArray={products} />
      <RouterNavLink button="true" to={routes.products}>
        VIEW COLLECTION
      </RouterNavLink>
      <SentenceBox>
        <Paragraph color="gold" size="l">
          Get your dream bike!
        </Paragraph>
      </SentenceBox>
      <AboutBox>
        <StyledAboutImage src={aboutUsImg} alt="" />
        <ContentBox>
          <StyledHeadingContent>ABOUT US</StyledHeadingContent>
          <Paragraph size="s">
            This is your About section. It’s a great space to tell your story
            and to describe who you are and what you do. If you're a business,
            talk about how you started and tell the story of your professional
            journey. People want to know the real you, so don't be afraid to
            share personal anecdotes. Explain your core values and how you, your
            organization, or your business stand out from the crowd.
          </Paragraph>
          <RouterNavLink button="true" to={routes.contact}>
            CONTACT
          </RouterNavLink>
        </ContentBox>
      </AboutBox>
      <CycleBox>
        <StyledCycleImage src={cycleWithStyle} alt="" />
        <ContentBox>
          <StyledHeadingContent>CYCLE WITH STYLE</StyledHeadingContent>
          <Paragraph size="s">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </Paragraph>
          <RouterNavLink button="true" to={routes.contact}>
            WHAT'S NEW
          </RouterNavLink>
        </ContentBox>
      </CycleBox>
    </StyledWrapper>
  );
};

export default Home;
