import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import fetch from "unfetch"
import {
  DISMISS_MOTD_IDS_KEY,
  getLocalStorage,
  setLocalStorage,
} from "../utils/storage"
import logger from "../utils/logger"
import Alert, { statusLevels } from "./Alert"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../utils/theme"

export { statusLevels }

const acceptableMotdKeys = [
  "version",
  "title",
  "message",
  "href",
  "to",
  "linkText",
  "statusLevel",
  "startDate",
  "endDate",
]

const BodyNoMargin = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  transition: height 300ms ease-out;
`

const defaultState = {
  messages: [],
  dismissedMessageIds: [],
}

class Motd extends React.Component {
  static propTypes = {
    motdsUrl: PropTypes.string,
  }

  wrapperRef

  constructor(props) {
    super(props)

    this.wrapperRef = React.createRef()

    this.state = defaultState
  }

  componentDidMount() {
    this.getMotds()
  }

  getMotds = () =>
    this.props.motds
      ? this.updateMessages(this.props.motds)
      : this.fetchMotds(this.props.motdsUrl)

  fetchMotds = url => {
    fetch(url)
      .then(this.deserializeResponse)
      .then(this.updateMessages)
      .catch(this.handleError)
  }

  deserializeResponse = data => {
    const body = data.json()
    for (let key in body) {
      if (acceptableMotdKeys.indexOf(key) === -1) {
        logger.warn(
          `Received unacceptable field on MOTD${
            body.title ? ` with title ${body.title}` : ""
          } - key: ${key}`
        )
      }
    }
    return body
  }

  updateMessages = motds => {
    if (!motds || motds.length === 0) return
    try {
      var dismissedMessageIds = getLocalStorage(DISMISS_MOTD_IDS_KEY) || []
    } catch (err) {
      logger.error(err)
    }

    const messages = []
    const allPublishedMessageIds = []
    /**
     * We don't use `.map` + `.filter` here for performance,
     * and because we're manage various side effects with
     * `messages`, `dismissedMessageIds`, `allPublishedMessageIds`
     * so it's some dirty impure code anyway.
     */
    for (let i = 0; i < motds.length; i++) {
      const motd = motds[i]
      const { version, startDate: startDateStr, endDate: endDateStr } = motd

      /**
       * Use `sys.id` (contentful record ID) and `updatedAt` as
       * unique identifiers in case an dismissed MOTD is updated
       * or it's unpublished and republished (used a template
       * for a recurring issue/alert)
       */
      const uniqueIdentifier = this.getUniqueIdentifier(motd)
      const id = `${uniqueIdentifier}${version ? `v${version}` : ""}`
      allPublishedMessageIds.push(id)

      const startDate = startDateStr ? new Date(startDateStr) : undefined
      const endDate = endDateStr ? new Date(endDateStr) : undefined
      const nowDate = new Date()

      if (
        dismissedMessageIds.indexOf(id) === -1 &&
        (!startDate || nowDate > startDate) &&
        (!endDate || nowDate < endDate)
      ) {
        messages.push({
          id,
          title: motd.title,
          message: motd.message,
          href: motd.href,
          to: motd.to,
          linkText: motd.linkText,
          statusLevel: motd.statusLevel,
        })
      }
    }

    /**
     * Clean up - remove unpublished Motds from `dismissedMessageIds`
     * So localStorage value doesn't grow indefinitely
     */
    for (let i = 0; i < dismissedMessageIds.length; i++) {
      const dismissId = dismissedMessageIds[i]
      if (allPublishedMessageIds.indexOf(dismissId) === -1) {
        dismissedMessageIds.splice(i, 1)
      }
    }

    this.setState(
      {
        messages,
        dismissedMessageIds,
      },
      /**
       * Prioritize setting state first, then set localeStorage as side-effect
       */
      () => {
        setLocalStorage(DISMISS_MOTD_IDS_KEY, dismissedMessageIds)
        if (this.wrapperRef.current && messages.length > 0) {
          this.expandElement(this.wrapperRef.current)
        }
      }
    )
  }

  /**
   * Animates the vertical expansion of an element
   * (animate height)
   * @source https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-3
   */
  expandElement = element => {
    const height = element.scrollHeight
    element.style.height = height + "px"
    element.addEventListener("transitionend", handleTransitionEnd)
    element.dataset.collapsed = "false"

    function handleTransitionEnd(_e) {
      element.removeEventListener("transitionend", handleTransitionEnd)
      element.style.height = null
    }
  }

  /**
   * Reset state and don't present alert UI
   */
  handleError = err => {
    logger.error(err)
    this.setState(defaultState)
  }

  /**
   * When a user closes a single MOTD
   */
  handleMessageDismiss = ev => {
    const messageId = ev.currentTarget.name
    const dismissedMessageIds = [...this.state.dismissedMessageIds, messageId]
    const messages = this.state.messages.filter(
      item => dismissedMessageIds.indexOf(item.id) === -1
    )
    this.setState(
      {
        dismissedMessageIds,
        messages,
      },
      () => {
        setLocalStorage(DISMISS_MOTD_IDS_KEY, dismissedMessageIds)
        if (messages.length === 0) {
          this.wrapperRef.current.dataset.collapsed = "true"
        }
      }
    )
  }

  render() {
    const { messages } = this.state
    return (
      <ThemeProvider theme={theme}>
        <BodyNoMargin />
        <Wrapper
          ref={this.wrapperRef}
          style={{ height: 0 }}
          data-collapsed={true}
        >
          {messages.length > 0 &&
            messages.map(
              ({ id, title, message, statusLevel, href, to, linkText }) => (
                <Alert
                  key={id}
                  title={title}
                  message={message}
                  statusLevel={statusLevel}
                  href={href}
                  to={to}
                  linkText={linkText}
                  dismissButtonProps={{
                    onClick: this.handleMessageDismiss,
                    name: id,
                  }}
                />
              )
            )}
        </Wrapper>
        {this.props.children}
      </ThemeProvider>
    )
  }

  /**
   * Evaluate some unique id from the data
   * So that changes to the data
   * result in ignored messages reappearing
   */
  getUniqueIdentifier = motd => {
    let str = ""
    for (let key in motd) {
      const val = motd[key]
      if (!!val && key !== "message") {
        str += val
      }
    }
    return btoa(str)
  }
}

export default () => {
  const data = useStaticQuery(graphql`
    query MotdQuery {
      site {
        siteMetadata {
          motdsUrl
        }
      }
    }
  `)

  return <Motd motdsUrl={data.site.siteMetadata.motdsUrl} />
}
