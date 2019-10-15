import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import { Flex, Box, Heading, Text } from "rebass"

const headingFontFamily = `"Courier New", Courier, Palatino, serif`
const textFontFamily = `Roboto, Verdana, Helvetica, Arial, sans-serif`
const monoFontFamily = `"Lucida Console", Monaco, monospace`
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
            fontSize="1.2rem"
            textAlign={textAlign}
            mb={3}
          >
            {title}
          </Heading>
          {description && <p>{description}</p>}
          <Flex
            as="ul"
            flexDirection="column"
            justifyContent={["center", "center", "left"]}
            pl={4}
            // pl={[0, 0, 4]}
          >
            {themes.map(({ resolve, options }) => (
              <Text
                as="li"
                fontFamily={textFontFamily}
                fontSize="0.9rem"
                css={`
                  list-style-type: upper-roman;

                  a {
                    color: blue;

                    &:visited: {
                      color: blue;
                    }
                  }
                `}
                mb={3}
              >
                <Text fontFamily={monoFontFamily}>
                  <a href={pathPrefix + options.demoPathPrefix}>{resolve}</a>
                </Text>
                {options.demoDescription && (
                  <Text color="gray" fontSize="0.6rem" my={1} lineHeight={1.5}>
                    {options.demoDescription}
                  </Text>
                )}
              </Text>
            ))}
          </Flex>
        </Box>

        <Text
          fontFamily={textFontFamily}
          textAlign={textAlign}
          fontSize="0.7rem"
          css={`
            a {
              color: blue;

              &:visited: {
                color: blue;
              }
            }
          `}
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
            demoPathPrefix
            demoDescription
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
