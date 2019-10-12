import React from "react"
import { graphql, Link } from "gatsby"

import Image from "gatsby-image"

const IndexPage = ({ data }) => {
  const { title, description, themes } = data.site.siteMetadata

  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: 960,
        }}
      >
        <div style={{ width: "50%" }}>
          <Image fluid={data.heroImage.childImageSharp.fluid} />
        </div>
        <div style={{ width: "50%" }}>
          <h1>{title}</h1>
          <p>{description}</p>
          {themes.map(({ resolve, options }) => (
            <ul>
              <li>
                <Link to={options.themePathPrefix}>{resolve}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        themes {
          resolve
          options {
            themePathPrefix
          }
        }
      }
    }
    heroImage: file(relativePath: { regex: "/hero.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
