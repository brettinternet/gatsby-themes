import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { createMediaQuery, createMobileMediaQuery } from "utils/mixins"
import find from "lodash/find"
import get from "lodash/get"

import Section from "components/Section"
import Hide from "components/Hide"
import ScrollLock, { TouchScrollable } from "react-scrolllock"
import { Text } from "components/Basic"

const headerItemZIndex = 20

const NavLinks = ({ links }) => (
  <Links>
    {links.map(({ name, to, ...otherProps }) => (
      <li key={name}>
        <StyledLink activeClassName={activeClassName} to={to} {...otherProps}>
          <Text
            as="span"
            letterSpacing="1.1px"
            fontSize={["1.1rem", "1.1rem", "0.6rem"]}
          >
            {name}
          </Text>
        </StyledLink>
      </li>
    ))}
  </Links>
)

class Header extends React.Component {
  state = {
    mobileMenuActive: false,
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location &&
      this.state.mobileMenuActive &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.setState({ mobileMenuActive: false })
    }
  }

  toggleMobileNav = () =>
    this.setState(state => ({ mobileMenuActive: !state.mobileMenuActive }))

  render() {
    const { title, menuLinks } = this.props
    const { mobileMenuActive } = this.state
    return (
      <header>
        {mobileMenuActive && <ScrollLock />}
        <Section>
          <Nav>
            {title && (
              <TitleLink to={get(find(menuLinks, { name: "Home" }), "to")}>
                <Text
                  letterSpacing="1.2px"
                  fontSize={["1.1rem", "1.1rem", "0.9rem"]}
                >
                  {title}
                </Text>
              </TitleLink>
            )}
            <TouchScrollable>
              <Menu isMobile={`${mobileMenuActive}`}>
                <NavLinks links={menuLinks} />
              </Menu>
            </TouchScrollable>
            <Hide
              show={[true]}
              css={`
                margin-left: auto;
                z-index: ${headerItemZIndex};
              `}
            >
              <Hamburger
                onClick={this.toggleMobileNav}
                isActive={mobileMenuActive}
              >
                <HamburgerBox>
                  <HamburgerInner />
                </HamburgerBox>
              </Hamburger>
            </Hide>
          </Nav>
        </Section>
      </header>
    )
  }
}

export default Header

const overlayZIndex = 15

const hamburgerColor = "#0a0a0a"
const hamburgerWidth = 30
const hamburgerHeight = 2

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
`

const HamburgerInner = styled.div`
  top: 50%;

  top: 2px;
  transition: background-color 0s linear 0.13s;
  margin-top: -2px;

  &,
  &:before,
  &:after {
    width: ${hamburgerWidth}px;
    height: ${hamburgerHeight}px;
    background-color: ${hamburgerColor};
    border-radius: 4px;
    position: absolute;
    transition: transform 0.15s ease;
    display: block;
  }

  &:before,
  &:after {
    content: "";
  }

  &:before {
    top: 10px;
    transition: top 0.1s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &:after {
    top: 20px;
    transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    bottom: -10px;
  }
`

const Hamburger = styled.div`
  line-height: 1;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.15s, filter 0.15s linear;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &:hover {
        opacity: 0.7;
      }

      ${HamburgerInner} {
        transition-delay: 0.22s;
        background-color: transparent !important;

        &,
        &:before,
        &:after {
          background-color: #000;
        }

        &:before {
          top: 0;
          transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
            transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
          transform: translate3d(0, 10px, 0) rotate(45deg);
        }

        &:after {
          top: 0;
          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
            transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.22s;
          transform: translate3d(0, 10px, 0) rotate(-45deg);
        }
      }
    `};
`

const Nav = styled.nav`
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  padding: 0.5rem 0;
`

const TitleLink = styled(Link)`
  z-index: ${headerItemZIndex};
  color: #000;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  white-space: nowrap;
  line-height: inherit;
  font-weight: 400;
  opacity: 0.8;
  text-decoration: none;
  /* text-transform: uppercase; */
`

const Links = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: auto;
  display: flex;
  flex-direction: row;

  li {
    margin: 1rem 0;

    ${({ theme }) => css`
      ${createMobileMediaQuery(theme.breakpoints[1])} {
        margin: 0;
      }
    `}
  }
`

const Menu = styled.menu`
  margin: 0;
  padding: 0;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-basis: 100%;
  transform: scale(${({ isMobile }) => (isMobile === "true" ? 1 : 0.98)});
  transition: visibility 0.2s ease-out, opacity 0.2s ease-out,
    transform 0.2s ease-out, background 400ms ease-out;
  opacity: ${({ isMobile }) => (isMobile === "true" ? 1 : 0)};
  top: 0;
  right: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  visibility: ${({ isMobile }) => (isMobile === "true" ? "visible" : "hidden")};
  background: #ededed;
  z-index: ${overlayZIndex};

  ${({ theme }) => css`
    ${createMobileMediaQuery(theme.breakpoints[1])} {
      transition: none;
      flex-basis: auto;
      opacity: 1;
      transform: scale(1);
      visibility: visible;
      position: static;
      background: none;
    }
  `};

  ${({ theme, isMobile }) =>
    isMobile &&
    css`
      ${createMediaQuery(theme.breakpoints[1])} {
        ${Links} {
          margin: auto;
          flex-direction: column;
          text-align: center;
        }
      }
    `};
`

const activeClassName = "nav-item-active"
const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: #000;
  opacity: 0.8;
  text-decoration: none;
  font-weight: 300;

  ${({ theme }) =>
    css`
      ${createMobileMediaQuery(theme.breakpoints[1])} {
        font-weight: 400;
      }
    `};

  &.${activeClassName} {
    font-weight: bold;
    opacity: 1;
  }
`
