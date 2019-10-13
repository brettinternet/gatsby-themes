import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import theme from "utils/theme"
import GlobalCSS from "../../../common/utils/globalStyles"

import Helmet from "react-helmet"
import Header from "components/Header"
import Footer from "components/Footer"

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query MargotThemeLayout {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            to
          }
        }
      }
      siteImage: file(relativePath: { regex: "/hero.jpg/" }) {
        childImageSharp {
          fixed(width: 1200, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  const siteImage = data.siteImage.childImageSharp.fixed.src
  const { title, description, menuLinks } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,900,900i"
            rel="stylesheet"
          />
          {[
            {
              property: "og:image",
              content: siteImage,
            },
            {
              name: "twitter:image",
              content: siteImage,
            },
          ].map((metaProps, index) => (
            <meta key={index} {...metaProps} />
          ))}
        </Helmet>
        <GlobalCSS />
        <Header
          title={title}
          description={description}
          menuLinks={menuLinks}
          location={location}
        />
        <Main>{children}</Main>
        <Footer />
      </App>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
