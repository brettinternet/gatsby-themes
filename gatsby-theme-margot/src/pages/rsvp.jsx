import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import Head from "components/Head"
import Section from "components/Section"
import { Rsvp } from "components/Forms"
import { Flex, Box } from "components/Basic"
import Hide from "components/Hide"

const RsvpPage = ({ data }) => {
  const heroImage = data.heroImage
  const { rsvpDetails } = data.site.siteMetadata
  return (
    <>
      <Head title="RSVP" />
      <Section my={3}>
        <Flex flexDirection="row">
          {heroImage && (
            <Box width={[0, 0, 1 / 2]} pr={3}>
              <Hide hide={[true, true]}>
                <Image fluid={heroImage.childImageSharp.fluid} />
              </Hide>
            </Box>
          )}
          <Box width={[1, 1, 1 / 2]}>
            <Rsvp {...rsvpDetails} />
          </Box>
        </Flex>
      </Section>
    </>
  )
}

export default RsvpPage

export const query = graphql`
  query MargotThemeRsvpPageQuery {
    site {
      siteMetadata {
        rsvpDetails {
          note
          googleSheetsScriptUrl
        }
      }
    }
    heroImage: file(relativePath: { regex: "/rsvp.jpg/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
