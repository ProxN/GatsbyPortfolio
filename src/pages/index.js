import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import Main from "../styles/Main";
import { Layout, Hero, About } from "../components/Index";
import { graphql } from "gatsby";


const MainContainer = styled(Main)`
  @media (max-width: 40em) {
    padding: 0 100px;
  }
  @media (max-width: 30em) {
    padding: 0 50px;
  }
  @media (max-width: 23.5em) {
    padding: 0 25px;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <MainContainer>
      <Hero />
      <About data={data.about.edges} />
    </MainContainer>
  </Layout>
  )
};



IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" }}) {
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
  }
`
