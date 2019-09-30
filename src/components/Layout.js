import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/GlobalStyles"
import { Navbar, Seo } from "./Index"

function Layout({ children }) {
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
        <>
          <Seo metadata={site.siteMetadata} />

          <GlobalStyle />

          <div className="container">
            <Navbar />
            {children}
          </div>
        </>
      )}
    />
  )
}
Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout

