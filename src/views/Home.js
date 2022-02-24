import React, { useContext } from "react";
import Div from "../components/atoms/Div";
import Img from "../components/atoms/Img";
import mainImg from "../assets/images/mainImg.jpg";
import aboutUsImg from "../assets/images/aboutUs.jpg";
import cycleWithStyle from "../assets/images/cycleWithStyle.jpg";
import RouterNavLink from "../components/atoms/RouterNavLink";
import Span from "../components/atoms/Span";
import Paragraph from "../components/atoms/Paragraph";
import Heading from "../components/atoms/Heading";
import { routes } from "../routes/index";
import LastThreeItems from "../components/molecules/LastThreeItems";
import RootContext from "../context/RootContext";

const Home = () => {
  const { products } = useContext(RootContext);
  return (
    <Div homeWrapper>
      <Img homeMainImg src={mainImg} alt="" />
      <Heading headingType="h1" headingHomeNewItems>
        NEW ARRIVALS
      </Heading>
      <LastThreeItems productsArray={products} />
      <RouterNavLink toProductsHome to={routes.products}>
        <Span>VIEW COLLECTION</Span>
      </RouterNavLink>
      <Div homeSentenceWrapper>
        <Paragraph homeSentence>Get your dream bike!</Paragraph>
      </Div>
      <Div homeAbout>
        <Img homeAbout src={aboutUsImg} alt="" />
        <Div homeAboutContent>
          <Heading homeHeadingAbout headingType="h2">
            ABOUT US
          </Heading>
          <Paragraph paragraphInHome>
            This is your About section. It’s a great space to tell your story
            and to describe who you are and what you do. If you're a business,
            talk about how you started and tell the story of your professional
            journey. People want to know the real you, so don't be afraid to
            share personal anecdotes. Explain your core values and how you, your
            organization, or your business stand out from the crowd.
          </Paragraph>
          <RouterNavLink toProductsHome to={routes.contact}>
            <Span toProductsHome>CONTACT</Span>
          </RouterNavLink>
        </Div>
      </Div>
      <Div homeCycle>
        <Img cycleStyle src={cycleWithStyle} alt="" />
        <Div homeCycleContent>
          <Heading homeHeadingAbout headingType="h2">
            CYCLE WITH STYLE
          </Heading>
          <Paragraph paragraphInHome>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </Paragraph>
          <RouterNavLink toProductsHome to={routes.contact}>
            <Span toProductsHome>WHAT'S NEW</Span>
          </RouterNavLink>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
