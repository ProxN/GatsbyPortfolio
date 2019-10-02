import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import { Heading, Section, media, Theme } from "../styles/index";
import GetIcon from "./Icons/getIcon";
import {socialLinks,srConfig,mailTo} from "../config/config";
import sr from '../utils/ScrollReveal';
const { fontSizes, colors } = Theme;

const ContactContainer = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  p {
    font-size: ${fontSizes.medium};

    ${media.phone`font-size:12px;`};
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const LinkIcon = styled.a`
  border: 1px dashed ${colors.secondaryColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  color: ${colors.lightGrey};
  svg {
    width: 16px;
    font-size: 50px;
    fill: currentColor;
    ${media.phone`width:12px;font-size:40px;`};
  }
  :hover {
    background-color: ${colors.secondaryColor};
    color: #fff;
  }
  ${media.phone`width:30px;height:30px;`}
`;
const Email = styled.a`
  font-size: ${fontSizes.medium};
  font-weight: 700;
  color: ${colors.lightGrey};
  text-decoration: none;
  margin-top: 20px;

  span {
    color: ${colors.secondaryColor};
    display: inline-block;
  }
  ${media.phone`font-size:13px;`};
`;

function Contact({ data }) {
  const { frontmatter, html } = data[0].node;
  const { title, email } = frontmatter;

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current,srConfig()));

  return (
    <ContactContainer ref={revealContainer}>
      <Heading dangerouslySetInnerHTML={{ __html: title }}></Heading>
      <ContentContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Email
          href={mailTo}
          dangerouslySetInnerHTML={{ __html: email }}
        />
        <SocialContainer>
          {socialLinks.map(link => (
            <LinkIcon href={link.url} key={link.name}>
              <GetIcon name={link.name} />
            </LinkIcon>
          ))}
        </SocialContainer>
      </ContentContainer>
    </ContactContainer>
  );
}

export default Contact;
