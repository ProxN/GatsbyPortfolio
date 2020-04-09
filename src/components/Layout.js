import React, { useState } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GlobalStyle } from "../styles/index";
import { Navbar, Seo } from "./Index";
import Loader from "./loader";

function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Seo metadata={site.siteMetadata} />
          <GlobalStyle />

          {isLoading ? (
            <Loader finish={() => setIsLoading(false)} />
          ) : (
            <div className="container">
              <Navbar />
              {children}
            </div>
          )}
        </div>
      )}
    />
  );
}
Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;
