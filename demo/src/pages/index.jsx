import React from "react"
import { graphql, Link } from "gatsby"

import Image from "gatsby-image"
import { Flex, Box, Heading, Text } from "rebass"

const IndexPage = ({ data }) => {
  const { title, description, themes } = data.site.siteMetadata

  return (
    <>
      <Flex
        mx="auto"
        style={{
          maxWidth: 960,
        }}
      >
        <Box width={[1, 1, 1 / 2]}>
          <Image fluid={data.heroImage.childImageSharp.fluid} />
        </Box>
        <Box width={[1, 1, 1 / 2]} pl={[0, 0, 3]}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          {themes.map(({ resolve, options }) => (
            <ul>
              <Text as="li" color="blue">
                <Link to={options.themePathPrefix}>{resolve}</Link>
              </Text>
            </ul>
          ))}
        </Box>
      </Flex>
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
