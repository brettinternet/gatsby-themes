import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import { Flex, Box, Heading, Text } from "rebass"

const headingFontFamily = `'Courier New',Palatino, serif`
const textFontFamily = `Roboto, Verdana, Arial, sans-serif`

const IndexPage = ({ data }) => {
  const { title, description, themes } = data.site.siteMetadata
  const pathPrefix = data.site.pathPrefix

  return (
    <>
      <Flex
        mx="auto"
        p={[2, 3, 5]}
        style={{
          maxWidth: 960,
        }}
        flexWrap="wrap"
      >
        <Box width={[1, 1, 1 / 2]}>
          <Image fluid={data.heroImage.childImageSharp.fluid} />
        </Box>
        <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]} pt={3} pb={3}>
          <Heading as="h1" fontFamily={headingFontFamily} fontSize="2rem">
            {title}
          </Heading>
          <p>{description}</p>
          {themes.map(({ resolve, options }) => (
            <ul>
              <Text
                as="li"
                fontFamily={textFontFamily}
                css={`
                  a {
                    color: blue;

                    &:visited: {
                      color: blue;
                    }
                  }
                `}
              >
                <a href={pathPrefix + options.themePathPrefix}>{resolve}</a>
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
      pathPrefix
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
