import React from "react";
import styled from "styled-components";
import { useSpring, animated,config} from "react-spring";
import {Theme,Button,Section} from "../styles/index";
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
  @media (max-width: 40em) {
    font-size: 55px;
  }
  @media (max-width: 30em) {
    font-size: 40px;
  }
`;
const SubTitle = styled(animated.h2)`
  display: block;
  font-size: ${fontSizes.medium};
  color: #fff;
  line-height: 1.3;
  font-weight: 300;
  letter-spacing: 8px;
  div{
      display:inline-block;
  }
  @media (max-width: 40em) {
    letter-spacing: 6px;
    font-size: ${fontSizes.small};
  }
  @media (max-width: 30em) {
    letter-spacing: 5px;
    font-size: ${fontSizes.xsmal};
  }
`;
const AboutMe = styled(Button)`
    margin-top:50px;
    border:1px solid #ff6b6b;
    transition:background-color  250ms, color 250ms;
    :hover{
      background-color:#ff6b6b;
      color:#f0f0f0;
    }
`;

function Hero() {
    const titleSpring = useSpring({
        config:config.gentle,
        delay:500,
        to:{
            opacity:1,
            transform:'translateX(0px)'
        },
        from:{
            opacity:0,
            transform:'translateX(-100px)'
        }
    });
    const subTitleSpring = useSpring({
        config:config.gentle,
        delay:500,
        to:{
            opacity:1,
            transform:'translateX(0px)'
        },
        from:{
            opacity:0,
            transform:'translateX(100px)'

        }

    })

    // const BorderButton = useSpring({
    //     config:config.gentle,
    //     opacity:1,
    //     border:'1px solid #333',
    //     from:{
    //         opacity:0,
    //         border:'0px solid #333'
    //     }
    // })
    // const words = 'A Front-end developer.'.split('');
    // console.log(words);
    // const SubTitleTrail = useTrail(words.length,{
    //     config:config.wobbly,
        
    //     opacity:1,
    //     transform:'translateY(0px)',
    //     from:{
    //         opacity:0,
    //         transform:'translateY(-3px)'
    //     }
    // });

  return (
    <HeroContainer>
      <HeroContent>
        <Title style={titleSpring}>
          Hello,
          <br />
          I'm <span>Ayoub</span>
          <br />
          {/* A Front-end <span>D</span>eveloper. */}
        </Title>
        <br />
        {/* <SubTitle>
            {SubTitleTrail.map((propsStyle,index) => (
                <animated.div key={Math.random()} style={propsStyle}>
                    {words[index]}
                </animated.div>
            ))}
        </SubTitle> */}
        <SubTitle style={subTitleSpring}>A Front-end developer.</SubTitle>
        <AboutMe  style={titleSpring}>About Me</AboutMe>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
