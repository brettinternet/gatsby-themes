import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Head({ description, lang, meta, keywords, title, imageSrc }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? [
                      {
                        name: "keywords",
                        content: keywords.join(", "),
                      },
                    ]
                  : []
              )
              .concat(meta)
              .concat(
                imageSrc
                  ? [
                      {
                        name: "og:image",
                        content: imageSrc,
                      },
                      {
                        name: "twitter:image",
                        content: imageSrc,
                      },
                    ]
                  : []
              )}
          />
        )
      }}
    />
  )
}

Head.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
}

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
}

export const HeadPropTypes = PropTypes.shape(propTypes)

Head.propTypes = propTypes

export default Head

const detailsQuery = graphql`
  query MargotThemeDefaultHeadQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
