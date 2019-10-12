import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import Head from "components/Head"
import Section from "components/Section"
import { Heading, Box } from "components/Basic"

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Head title="Home" description={description} />
      <Box
        mx="auto"
        css={`
          position: relative;
          max-width: 2460px;
          margin: auto;
        `}
      >
        <Box>
          <Image
            fluid={data.heroImage.childImageSharp.fluid}
            style={{ maxHeight: "800px" }}
          />
        </Box>
        <TitleSection>
          <Heading
            fontWeight={[400, 400, 300]}
            textAlign="center"
            as="h1"
            color="white"
            letterSpacing="0.9rem"
            fontSize={["2rem", "2rem", "3rem", "5.5rem"]}
          >
            {title}
          </Heading>
        </TitleSection>
      </Box>
    </>
  )
}

export default IndexPage

const TitleSection = styled(Section)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`

export const query = graphql`
  query MargotThemeIndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    heroImage: file(relativePath: { regex: "/hero.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
