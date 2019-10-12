import React from "react"
import PropTypes from "prop-types"
import { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"

import { Heading, Text, Box, Flex } from "components/Basic"
import Link from "components/Link"
import Map from "components/Map"

const Details = ({
  isSummary,
  address,
  instructions,
  date,
  googleMapsApiKey,
  coordinates,
}) => {
  const data = useStaticQuery(graphql`
    query MargotThemeDetailsComponent {
      site {
        siteMetadata {
          menuLinks {
            name
            to
          }
        }
      }
    }
  `)

  const { menuLinks } = data.site.siteMetadata
  const detailsPage = find(menuLinks, { name: "Details" })

  return (
    <Box>
      <Box>
        <Heading
          mb={3}
          textAlign={isSummary ? ["center", "center", "left"] : "center"}
          fontWeight={[400, 400, 300]}
          as="h2"
          fontSize={["2rem", "2rem", "3rem"]}
        >
          Event Details
        </Heading>
        {date && (
          <Heading
            mb={3}
            textAlign={isSummary ? ["center", "center", "left"] : "center"}
            fontWeight={300}
            as="h3"
            letterSpacing={1.2}
            fontSize={"1.2rem"}
          >
            {date}
          </Heading>
        )}
        {instructions && (
          <Text
            as="p"
            mb={2}
            textAlign={isSummary ? ["center", "center", "left"] : "center"}
          >
            <em>{instructions}</em>
          </Text>
        )}
        {address && typeof address === "string" && (
          <Flex
            justifyContent={isSummary ? ["center", "center", "left"] : "center"}
          >
            <Box
              p={3}
              my={3}
              css={css`
                border: 1px solid ${({ theme }) => theme.colors.lightGray};
              `}
            >
              <Text
                as="p"
                m={0}
                textAlign={isSummary ? ["center", "center", "left"] : "center"}
                lineHeight="1rem"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: address
                      .split("\n")
                      .map((item, i) => item + "<br>")
                      .join(""),
                  }}
                />
              </Text>
            </Box>
          </Flex>
        )}
      </Box>

      {isSummary && (
        <Box my={3}>
          <Text textAlign={["center", "center", "left"]}>
            <Link to={detailsPage.to}>View additional details</Link>
          </Text>
        </Box>
      )}

      {!isSummary && coordinates && googleMapsApiKey && (
        <Box my={3}>
          <Map address={address} apiKey={googleMapsApiKey} />
        </Box>
      )}
    </Box>
  )
}

Details.propTypes = {
  isSummary: PropTypes.bool,
  address: PropTypes.string,
  instructions: PropTypes.string,
  date: PropTypes.string,
}

export default Details
