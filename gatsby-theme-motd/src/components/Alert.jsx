import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { px } from "../utils/mixins"

const dismissIcon = require("../assets/icons/dismiss.svg")
const successIcon = require("../assets/icons/success.svg")
const infoIcon = require("../assets/icons/info.svg")
const warningIcon = require("../assets/icons/warning.svg")
const errorIcon = require("../assets/icons/error.svg")
const neutralIcon = require("../assets/icons/neutral.svg")

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  background: ${({ theme, statusLevel }) => theme.colors[statusLevel].bg};
  color: ${({ theme, statusLevel }) => theme.colors[statusLevel].color};
`

const Flex = styled.div`
  display: flex;
`

const Content = styled.div`
  display: flex;
  max-width: ${({ theme }) => px(theme.appWidth)};
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  justify-content: space-between;
`

const StatusIconWrapper = styled.div`
  margin-right: 1rem;
  min-width: auto;
`

const Body = styled.div`
  /* flex: 1; */
`

const Heading = styled.h2`
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const Message = styled.p`
  margin: 0;
  line-height: 1.2;
  font-size: 0.9rem;
`

const linkStyles = css`
  color: ${({ theme }) => theme.colors.link || theme.colors.blue};
  white-space: nowrap;

  &:hover,
  &:visited {
    color: ${({ theme }) => theme.colors.linkHover || theme.colors.blue};
  }
`

const DismissIconWrapper = styled.div`
  margin-right: 1rem;
  min-width: auto;
`

const StyledButton = styled.button`
  border: 0;
  background: none;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const statusLevels = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  NEUTRAL: "neutral",
}

const statusIcons = {
  [statusLevels.SUCCESS]: successIcon,
  [statusLevels.INFO]: infoIcon,
  [statusLevels.WARNING]: warningIcon,
  [statusLevels.ERROR]: errorIcon,
  [statusLevels.NEUTRAL]: neutralIcon,
}

const Alert = ({
  className,
  style,
  title,
  message,
  href,
  to,
  linkText = "Learn More",
  statusLevel = statusLevels.NEUTRAL,
  dismissButtonProps,
}) => {
  const statusIcon = statusIcons[statusLevel]

  return (
    <Wrapper statusLevel={statusLevel} className={className} style={style}>
      <Content>
        <Flex>
          {statusIcon && (
            <StatusIconWrapper>
              <img src={statusIcon} alt="status icon" />
            </StatusIconWrapper>
          )}
          <Body>
            {title && <Heading>{title}</Heading>}
            {message && (
              <Message>
                {message}{" "}
                {to ? (
                  <Link to={to} css={linkStyles}>
                    {linkText}
                  </Link>
                ) : (
                  href && (
                    <a
                      href={href}
                      css={linkStyles}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkText}
                    </a>
                  )
                )}
              </Message>
            )}
          </Body>
        </Flex>
        {dismissButtonProps && (
          <DismissIconWrapper>
            <StyledButton {...dismissButtonProps}>
              <img src={dismissIcon} alt="cross icon" />
            </StyledButton>
          </DismissIconWrapper>
        )}
      </Content>
    </Wrapper>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
  statusLevel: PropTypes.oneOf(Object.values(statusLevels)),
  dismissButtonProps: PropTypes.object,
}

export default Alert
