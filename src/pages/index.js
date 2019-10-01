import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Main, Mixins } from "../styles/index";
import { Layout, Hero, About,Contact } from "../components/Index";
import Projects from "../components/Projects";


const MainContainer = styled(Main)`
  position: relative;
  ${Mixins.padding}
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <About data={data.about.edges} />
        <Projects data={data.portfolio.edges} />
        <Contact data={data.contact.edges} />
      </MainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" }}) {
      edges {
        node {
          frontmatter {
            stack
            title
          }
          html
        }
      }
    }
    portfolio: allMarkdownRemark(filter:{fileAbsolutePath: {regex: "/portfolio/"}}){
      edges {
        node {
          frontmatter {
            stack
            title
            demo
            source
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#232342" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" }}) {
      edges {
        node {
          frontmatter {
            title
            email
          }
          html
        }
      }
    }

  }
`;
