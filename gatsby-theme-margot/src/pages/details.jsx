import React from "react"

import Head from "components/Head"
import Section from "components/Section"
import Details from "components/Details"

const DetailsPage = () => {
  return (
    <>
      <Head title="Event Details" />
      <Section my={3}>
        <Details />
      </Section>
    </>
  )
}

export default DetailsPage
