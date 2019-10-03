import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Theme, Button, Section, media } from "../styles/index";
const { fontSizes, colors } = Theme;

const HeroContainer = styled(Section)`
  align-items: flex-start;
  display: flex;
`;
const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;
const Title = styled(animated.h1)`
  font-size: ${fontSizes.h1};
  color: ${colors.lightGrey};
  line-height: 1.3;
  padding: 20px 0;
  display: block;
  letter-spacing: 1px;
  font-weight: 700;
  span {
    color: ${colors.secondaryColor};
    opacity: 0.8;
    font-weight: 300;
  }
  ${media.tablet`font-size:55px;`};
  ${media.phablet`font-size:40px;`};
`;
const SubTitle = styled(animated.h2)`
  display: block;
  font-size: ${fontSizes.medium};
  color: ${colors.lightGrey};
  line-height: 1.3;
  font-weight: 300;
  letter-spacing: 8px;
  div {
    display: inline-block;
  }
  ${media.tablet`
    font-size:14px;
    letter-spacing:6px;
  `};
  ${media.phablet`
    font-size:13px;
    letter-spacing:5px;
  `};

`;
const AboutMe = styled(Button)`
  margin-top: 50px;
  border: 1px solid ${colors.secondaryColor};
  transition: background-color 250ms, color 250ms;
  :hover {
    background-color: ${colors.secondaryColor};
    color: #f0f0f0;
  }
`;

function Hero() {


  //Animations 
  const springAnimation = useSpring({
    config: config.gentle,
    delay: 500,
    to: {
      opacity: 1,
      transform: "translateX(0px)",
    },
    from: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
  });
  const subTitleSpring = useSpring({
    config: config.gentle,
    delay: 500,
    to: {
      opacity: 1,
      transform: "translateX(0px)",
    },
    from: {
      opacity: 0,
      transform: "translateX(100px)",
    },
  });

  return (
    <HeroContainer>
      <HeroContent>
        <Title style={springAnimation}>
          Hello,
          <br />
          I'm <span>Ayoub</span>
          <br />
        </Title>
        <SubTitle style={subTitleSpring}>A Front-end developer.</SubTitle>
        <AboutMe style={springAnimation}>About Me</AboutMe>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
