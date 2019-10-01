import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Main, Mixins } from "../styles/index";
import { Layout, Hero, About } from "../components/Index";


const MainContainer = styled(Main)`
  position: relative;
  ${Mixins.padding}
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <About data={data.about.edges} />
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
  }
`;
