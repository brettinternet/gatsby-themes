import React from "react"
import styled from "styled-components"
import metaData from "../../../package.json"

const StyledFooter = styled.footer`
  padding: 1rem 0;
  font-size: 0.55rem;
  text-align: center;

  a {
    color: inherit;
    font-weight: 700;
  }
`

const Footer = () => (
  <StyledFooter>
    <a href={metaData.repository.url} target="_blank" rel="noopener noreferrer">
      Gatsby theme
    </a>{" "}
    made by{" "}
    <a
      href="https://brettinternet.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      @brettinternet
    </a>
  </StyledFooter>
)

export default Footer
