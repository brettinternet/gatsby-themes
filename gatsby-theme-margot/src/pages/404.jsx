import React from "react"
import { css } from "styled-components"

import Head from "components/Head"
import Section from "components/Section"
import { Heading } from "rebass"

const NotFoundPage = () => (
  <>
    <Head title="404" />
    <Section>
      <Heading
        my={5}
        css={css`
          font-size: 0.8rem;
          text-align: center;
          font-weight: 400;
        `}
      >
        This page is empty
      </Heading>
    </Section>
  </>
)

export default NotFoundPage
