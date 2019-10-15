import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
// import fetch from "isomorphic-unfetch"
import {
  IGNORE_MOTD_IDS_KEY,
  getLocalStorage,
  setLocalStorage,
} from "../utils/storage"
import logger from "../utils/logger"
import Alert from "./Alert"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  transition: height 300ms ease-out;
`

const defaultState = {
  messages: [],
  ignoreMessageIds: [],
}

class Motd extends React.Component {
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
    this.props.motds ? this.updateMessages(this.props.motds) : this.fetchMotds()

  fetchMotds = () => {
    // fetch(this.props.fetchUrl)
    //   .then(this.deserializeResponse)
    //   .then(this.updateMessages)
    //   .catch(this.handleError)
  }

  deserializeResponse = data => data.json()

  updateMessages = motds => {
    try {
      var ignoreMessageIds = getLocalStorage(IGNORE_MOTD_IDS_KEY) || []
    } catch (err) {
      logger.error(err)
    }

    const messages = []
    const allPublishedMessageIds = []
    /**
     * We don't use `.map` + `.filter` here for performance,
     * and because we're manage various side effects with
     * `messages`, `ignoreMessageIds`, `allPublishedMessageIds`
     * so it's some dirty impure code anyway.
     */
    for (let i = 0; i < motds.length; i++) {
      const motd = motds[i]
      const { version, startDate: startDateStr, endDate: endDateStr } = motd

      /**
       * Use `sys.id` (contentful record ID) and `updatedAt` as
       * unique identifiers in case an ignored MOTD is updated
       * or it's unpublished and republished (used a template
       * for a recurring issue/alert)
       */
      const uniqueIdentifier = this.getUniqueIdentifier(motd)
      const id = `${uniqueIdentifier}v${version}`
      allPublishedMessageIds.push(id)

      const startDate = startDateStr ? new Date(startDateStr) : undefined
      const endDate = endDateStr ? new Date(endDateStr) : undefined
      const nowDate = new Date()

      if (
        ignoreMessageIds.indexOf(id) === -1 &&
        (!startDate || nowDate > startDate) &&
        (!endDate || nowDate < endDate)
      ) {
        messages.push({
          id,
          startDate,
          endDate,
          title: motd.title,
          message: motd.message,
          href: motd.href,
          linkText: motd.linkText,
          to: motd.to,
          statusLevel: motd.statusLevel,
        })
      }
    }

    /**
     * Clean up - remove unpublished Motds from `ignoreMessageIds`
     * So localStorage value doesn't grow indefinitely
     */
    for (let i = 0; i < ignoreMessageIds.length; i++) {
      const ignoreId = ignoreMessageIds[i]
      if (allPublishedMessageIds.indexOf(ignoreId) === -1) {
        ignoreMessageIds.splice(i, 1)
      }
    }

    this.setState(
      {
        messages,
        ignoreMessageIds,
      },
      /**
       * Prioritize setting state first, then set localeStorage as side-effect
       */
      () => {
        setLocalStorage(IGNORE_MOTD_IDS_KEY, ignoreMessageIds)
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
  handleMessageClose = ev => {
    const messageId = ev.currentTarget.name
    const ignoreMessageIds = [...this.state.ignoreMessageIds, messageId]
    const messages = this.state.messages.filter(
      item => ignoreMessageIds.indexOf(item.id) === -1
    )
    this.setState(
      {
        ignoreMessageIds,
        messages,
      },
      () => {
        setLocalStorage(IGNORE_MOTD_IDS_KEY, ignoreMessageIds)
        if (messages.length === 0) {
          this.wrapperRef.current.dataset.collapsed = "true"
        }
      }
    )
  }

  render() {
    const { messages } = this.state
    return (
      <>
        <Wrapper
          ref={this.wrapperRef}
          style={{ height: 0 }}
          data-collapsed={true}
        >
          {messages.length > 0 &&
            messages.map(
              ({ id, title, message, statusLevel, link, linkText }) => (
                <Alert
                  key={id}
                  title={title}
                  message={message}
                  statusLevel={statusLevel}
                  href={link}
                  linkText={linkText}
                  noBorder
                  closeButtonProps={{
                    onClick: this.handleMessageClose,
                    name: id,
                  }}
                />
              )
            )}
        </Wrapper>
        {this.props.children}
      </>
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

export default Motd
