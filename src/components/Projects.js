import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Proptypes  from 'prop-types';
import Img from "gatsby-image";
import { Heading, Section, media, Theme } from "../styles/index";
import { srConfig } from "../config/config";
import sr from "../utils/ScrollReveal";
const { colors, fontSizes } = Theme;

const ProjectsContainer = styled(Section)`
  position: relative;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 40px;
  margin-top: 40px;
`;
const Project = styled.div`
  background-color: ${colors.lightPrimary};
  padding: 10px;
  border-radius: 4px;
  box-shadow: 3px 3px 10px rgba(31, 22, 22, 0.3),
    -3px -3px 10px rgba(31, 22, 22, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30px auto;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  justify-self: center;
  align-self: flex-start;
  font-size: ${fontSizes.medium};
  color: ${colors.lightGrey};
  letter-spacing: 1px;
  position: relative;
  font-weight: 500;
  padding: 10px 30px 0px 30px;
  display: inline-block;
  margin-bottom: 30px;
  ::before {
    content: "";
    position: absolute;
    height: calc(50% + 10px);
    width: 15px;
    border-left: 1px solid ${colors.secondaryColor};
    border-bottom: 1px solid ${colors.secondaryColor};
    top: 0;
    left: 0;
  }
  ::after {
    content: "";
    width: 15px;
    position: absolute;
    right: 0;
    top: 0;
    height: calc(50% + 10px);
    border-right: 1px solid ${colors.secondaryColor};
    border-bottom: 1px solid ${colors.secondaryColor};
  }
  span {
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    background-color: ${colors.secondaryColor};
    left: 0;
  }
  ${media.phablet`font-size:13px;`}
`;

const ImgConainter = styled.a`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  ${media.desktop`grid-column:1 / -1;`}
`;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(90%);
  transition: all 250ms;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  p {
    font-size: 14px;
    opacity: 0.8;
  }
  ${media.desktop`grid-column:1 / -1;`}
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.phone`justify-content: center;`}
`;

const TechName = styled.span`
  font-size: ${fontSizes.xsmal};
  border: 1px dashed ${colors.secondaryColor};
  padding: 4px 10px;
  text-align: center;
  color: ${colors.lightGrey};
  opacity: 0.9;
  margin: 0 10px 10px 0;
  ${media.thone`
    font-size: 11px;
    width: 85px;
    margin: 0 5px 10px 5px;
  `};
`;

const Links = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 13px;
  color: #fff;
  padding: 4px 10px;
  text-align: center;
  position: relative;
  margin-right: 10px;
  background-color: #0984e3;
  border: 1px dashed #0984e3;
  :hover {
    color: ${colors.lightGrey};
    background-color: transparent;
  }
  ${media.thone`font-size:11px;`};
`;

function Projects({ data }) {
  const revealTitle = useRef(null);
  const revealProject = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProject.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);
  return (
    <ProjectsContainer id='portfolio'>
      <Heading ref={revealTitle}>
        <span>Recent</span> Work.
      </Heading>
      <ContentContainer>
        {data.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, demo, source, image, stack } = frontmatter;
          return (
            <Project key={title} ref={el => (revealProject.current[i] = el)}>
              <Title>
                <span></span>
                {title}
              </Title>
              <ImgConainter>
                <Image fluid={image.childImageSharp.fluid} />
              </ImgConainter>
              <Content>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                <TechContainer>
                  {stack.map(tech => (
                    <TechName key={tech}>{tech}</TechName>
                  ))}
                </TechContainer>
                <Links>
                  <Link href={demo}>Demo</Link>
                  <Link href={source}>Source</Link>
                </Links>
              </Content>
            </Project>
          );
        })}
      </ContentContainer>
    </ProjectsContainer>
  );
}
Projects.prototype = {
  data: Proptypes.array.isRequired
};
export default Projects;
