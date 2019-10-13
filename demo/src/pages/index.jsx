import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import { Flex, Box, Heading, Text } from "rebass"

const headingFontFamily = `'Courier New',Palatino, serif`
const textFontFamily = `Roboto, Verdana, Arial, sans-serif`
const textAlign = ["center", "center", "left"]

const IndexPage = ({ data }) => {
  const { title, description, repoUrl, themes } = data.site.siteMetadata
  const pathPrefix = data.site.pathPrefix

  return (
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
      <Flex
        flexDirection="column"
        width={[1, 1, 1 / 2]}
        pl={[0, 0, 4]}
        pt={3}
        pb={3}
      >
        <Box flex="1" mb={5}>
          <Heading
            as="h1"
            fontFamily={headingFontFamily}
            fontSize="2rem"
            textAlign={textAlign}
            mb={3}
          >
            {title}
          </Heading>
          {description && <p>{description}</p>}
          {themes.map(({ resolve, options }) => (
            <Flex
              as="ul"
              justifyContent={["center", "center", "left"]}
              pl={[0, 0, 4]}
            >
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
            </Flex>
          ))}
        </Box>

        <Text
          fontFamily={textFontFamily}
          textAlign={textAlign}
          fontSize="0.75rem"
        >
          <a href={repoUrl}>brettinternet/gatsby-themes</a>
        </Text>
      </Flex>
    </Flex>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      pathPrefix
      siteMetadata {
        title
        repoUrl
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
