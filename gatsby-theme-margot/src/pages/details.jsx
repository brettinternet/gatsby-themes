import React from "react"
import { graphql } from "gatsby"

import Head from "components/Head"
import Section from "components/Section"
import Details from "components/Details"

const DetailsPage = ({ data }) => {
  return (
    <>
      <Head title="Event Details" />
      <Section my={3}>
        <Details {...data.site.siteMetadata.eventDetails} />
      </Section>
    </>
  )
}

export default DetailsPage

export const query = graphql`
  query MargotThemeDetailsPageQuery {
    site {
      siteMetadata {
        eventDetails {
          instructions
          address
          date
          googleMapsApiKey
          coordinates {
            lat
            lng
          }
        }
      }
    }
  }
`
