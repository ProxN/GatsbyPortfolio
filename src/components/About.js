import React from "react"
import styled from "styled-components"
import Section from "../styles/Section"
import Heading from "../styles/Heading"
const AboutContainer = styled(Section)`
  position: relative;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const InfoContainer = styled.div`
  width: 50%;
  @media (max-width: 62.5em) {
    width: 100%;
  }
`
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 37.5em) {
    justify-content: center;
  }
`
const TechName = styled.span`
  font-size: 13px;
  border: 1px dashed #ff6b6b;
  padding: 4px 10px;
  width: 100px;
  text-align: center;
  color: #d2d2e7;
  opacity: 0.9;
  margin: 0 10px 10px 0px;
  @media (max-width: 37.5em) {
    font-size: 11px;
    width: 85px;
    margin: 0 5px 10px 5px;
  }
`
function About({ data }) {
  const { frontmatter, html } = data[0].node
  const { title, stack } = frontmatter
  console.log(html)
  return (
    <AboutContainer>
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

export default About
