import React from "react"
import { css } from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
import find from "lodash/find"

import Head from "components/Head"
import Section from "components/Section"
import Img from "gatsby-image"
import { Heading, Flex } from "components/Basic"

const RegistryPage = ({ data }) => {
  const { registries } = data.site.siteMetadata

  return (
    <>
      <Head title="Registry" />
      <Section my={3}>
        <Heading
          mb={4}
          fontWeight={[400, 400, 300]}
          textAlign="center"
          as="h2"
          fontSize={["2rem", "2rem", "3rem"]}
        >
          Our Registries
        </Heading>
        <Flex flexWrap="wrap">
          {registries.map(({ name, href }, index) => {
            const image = get(
              find(data.registries.edges, ({ node }) => node.name === name),
              "node"
            )
            return (
              image && (
                <Flex
                  key={index}
                  justifyContent="center"
                  css={registryStyles}
                  width={[1, 1, 1 / 2, 1 / 3]}
                  mx="auto"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Img
                      fixed={image.childImageSharp.fixed}
                      alt={`${name} logo`}
                    />
                  </a>
                </Flex>
              )
            )
          })}
        </Flex>
      </Section>
    </>
  )
}

const registryStyles = css`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  a {
    transition: all 300ms;
    opacity: 0.8;

    &:hover,
    &:active {
      opacity: 1;
      background: #efefef;
    }
  }
`

export default RegistryPage

export const query = graphql`
  query MargotThemeRegistryPageQuery {
    site {
      siteMetadata {
        registries {
          name
          href
        }
      }
    }
    registries: allFile(filter: { relativePath: { regex: "/registries/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
