import React,{useEffect,useRef} from "react"
import styled from "styled-components"
import Proptypes  from 'prop-types';
import {Heading,Section,media,Theme} from "../styles/index";
import sr from '../utils/ScrollReveal';
import {srConfig} from '../config/config';
const {fontSizes,colors} = Theme;


const AboutContainer = styled(Section)`
  position: relative;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const InfoContainer = styled.div`
  width: 50%;
  ${media.desktop`width:100%;`};

`
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.thone`justify-content:center;`};

`
const TechName = styled.span`
  font-size: ${fontSizes.xsmal};
  border: 1px dashed ${colors.secondaryColor};
  padding: 4px 10px;
  width: 100px;
  text-align: center;
  color: ${colors.lightGrey};
  opacity: 0.9;
  margin: 0 10px 10px 0px;
  ${media.thone`
    font-size:11px;
    width:85px;
    margin:0 5px 10px 5px;
  `};

`;
function About({ data }) {

  const revealContainer = useRef(null);
  
  useEffect( () => sr.reveal(revealContainer.current,srConfig()),[]);

  const { frontmatter, html } = data[0].node;
  const { title, stack } = frontmatter;
  return (
    <AboutContainer id='#about' ref={revealContainer} >
      <Heading dangerouslySetInnerHTML={{ __html: title }}></Heading>
      <ContentContainer>
        <InfoContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {stack.map(name => (
              <TechName key={name}>{name}</TechName>
            ))}
          </SkillsContainer>
        </InfoContainer>
      </ContentContainer>
    </AboutContainer>
  )
}

About.prototype = {
  data: Proptypes.array.isRequired
};

export default About;
