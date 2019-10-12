import React from "react"
import { graphql } from "gatsby"

import Head from "components/Head"
import Section from "components/Section"
import Gallery from "components/Gallery"

const PhotosPage = ({ data, location }) => {
  const galleryImages = data.gallery.edges

  return (
    <>
      <Head title="Photos" />
      <Section py={3}>
        <Gallery
          location={location}
          images={galleryImages
            .slice()
            .sort((a, b) => a.node.name - b.node.name)}
        />
      </Section>
    </>
  )
}

export default PhotosPage

export const query = graphql`
  query MargotThemePhotosPageQuery {
    gallery: allFile(filter: { relativePath: { regex: "/gallery/" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 1800) {
              ...GatsbyImageSharpSizes
            }
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
