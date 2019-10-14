import React from "react"
import PropTypes from "prop-types"
import { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"

import { Heading, Text, Box, Flex } from "components/Basic"
import Link from "components/Link"
import Map from "components/Map"

const Details = ({ isSummary }) => {
  const data = useStaticQuery(graphql`
    query MargotThemeDetailsComponent {
      site {
        siteMetadata {
          menuLinks {
            name
            to
          }
          eventDetails {
            title
            description
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
  `)

  const { menuLinks, eventDetails = {} } = data.site.siteMetadata
  const detailsPage = find(menuLinks, { name: "Details" })
  const {
    title,
    address,
    description,
    instructions,
    date,
    googleMapsApiKey,
    coordinates,
  } = eventDetails

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
          {title || "Event Details"}
        </Heading>
        {description && !isSummary && (
          <Text
            as="p"
            mb={5}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
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
              py={3}
              px={5}
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

      {!isSummary && coordinates && !!googleMapsApiKey && (
        // googleMapsApiKey === "" ||
        <Box my={3}>
          <Map apiKey={googleMapsApiKey} coordinates={coordinates} />
        </Box>
      )}
    </Box>
  )
}

Details.propTypes = {
  isSummary: PropTypes.bool,
}

export default Details
