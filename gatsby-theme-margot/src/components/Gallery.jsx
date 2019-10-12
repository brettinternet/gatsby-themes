import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import styled from "styled-components"
import { createMobileMediaQuery } from "utils/mixins"

import Img from "gatsby-image"
import ScrollLock, { TouchScrollable } from "react-scrolllock"
import { Flex, Box } from "components/Basic"

const mobileMaxWidth = 700
class Gallery extends React.Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    this.portalRoot = document.createElement("div")
    document.body.appendChild(this.portalRoot)
    window.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    document.body.removeChild(this.portalRoot)
    window.removeEventListener("keyup", this.handleKeyUp, false)
  }

  openModal = (ev, index) => {
    if (ev && ev.preventDefault) ev.preventDefault()
    this.setState({
      showLightbox: true,
      selectedImage: index,
    })
  }

  closeModal = () => {
    this.setState({ showLightbox: false, selectedImage: 0 })
  }

  goBack = e => {
    e.stopPropagation()
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = e => {
    e.stopPropagation()
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27 || keyCode === 32) {
        // Escape key
        this.closeModal()
      }
    }
  }

  render() {
    return (
      <>
        <Flex flexWrap="wrap">
          {this.props.images.map(({ node }, index) => (
            <Box
              key={node.childImageSharp.sizes.src}
              width={[1, 1, 1 / 2, 1 / 4]}
              px={[0, 0, 2]}
              mb={2}
              css={`
                height: auto;

                ${({ theme }) => `${createMobileMediaQuery(
                  theme.breakpoints[1]
                )} {
                    height: 300px;
                  }
                `}

                ${({ theme }) => `${createMobileMediaQuery(
                  theme.breakpoints[2]
                )} {
                    height: 140px;
                  }
                `}
              `}
            >
              <MobileView>
                <StyledImg sizes={node.childImageSharp.sizes} alt={node.name} />
              </MobileView>
              <A
                href={node.childImageSharp.sizes.src}
                alt={`Event photo ${index + 1}`}
                onClick={ev => this.openModal(ev, index)}
              >
                <StyledImg sizes={node.childImageSharp.sizes} alt={node.name} />
              </A>
            </Box>
          ))}
        </Flex>

        {this.portalRoot &&
          this.state.showLightbox &&
          ReactDOM.createPortal(this.renderModal(), this.portalRoot)}
      </>
    )
  }

  renderModal = () => {
    const image = this.props.images[this.state.selectedImage]
    return (
      <LightboxModal onClick={this.closeModal}>
        <ScrollLock />
        <TouchScrollable>
          <LightboxContent>
            <Img
              sizes={image.node.childImageSharp.sizes}
              alt={image.name}
              style={{
                maxHeight: "100vh",
              }}
            />
          </LightboxContent>
        </TouchScrollable>
      </LightboxModal>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

const MobileView = styled.div`
  display: none;
  position: relative;

  @media (max-width: ${mobileMaxWidth}px) {
    display: block;
  }
`

const A = styled.a`
  cursor: zoom-in;
  display: inline;

  @media (max-width: ${mobileMaxWidth}px) {
    display: none;
  }
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  cursor: zoom-out;
  z-index: 100;

  @media (max-width: ${mobileMaxWidth}px) {
    display: none;
  }
`

const LightboxContent = styled.div`
  margin: 1rem;
  max-width: ${({ theme }) => theme.appWidth}px;
  width: 100%;
`

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  location: PropTypes.object,
}

export default Gallery
