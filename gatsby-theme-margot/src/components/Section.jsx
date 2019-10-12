import React from "react"
import { Box } from "components/Basic"
import { css } from "styled-components"

const Section = props => (
  <Box
    px={[2, 3]}
    mx="auto"
    width={1}
    css={css`
      max-width: ${({ theme }) => theme.appWidth}px;
    `}
    {...props}
  />
)

export default Section
