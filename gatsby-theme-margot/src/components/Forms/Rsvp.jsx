import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import request from "utils/request"

import Input from "components/Input"
import serialize from "utils/serialize"
import Button from "components/Button"
import Loader from "components/Loader"
import Radio from "components/Radio"
import { Heading, Text, Box } from "components/Basic"
import Details from "components/Details"

const Form = styled.form`
  max-width: 600px;
  margin: auto;
`

const StyledButton = styled(Button)`
  margin: 1rem auto;
  display: block;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const inlineStyle = css`
  display: inline-block;
  margin-left: 3px;
`

const Collapse = styled.div`
  overflow: hidden;
  height: auto;
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  transition: opacity 200ms, max-height 200ms ease-out;
  --transition: opacity 200ms, max-height 200ms ease-out;

  ${({ show }) =>
    show &&
    css`
      max-height: 80px;
      visibility: visible;
      opacity: 1;
    `};
`

const Noscript = styled.noscript`
  display: block;
  text-align: center;
`

const formItems = {
  firstName: "first_name",
  lastName: "last_name",
  rsvp: "rsvp",
  partyCount: "party_count",
  notes: "notes",
}

const initialState = {
  isLoading: false,
  isFormSuccess: false,
  isFormError: false,
  isRsvpFieldChecked: false,
}

export class Rsvp extends React.Component {
  static propTypes = {
    note: PropTypes.string,
    googleSheetsScriptUrl: PropTypes.string.isRequired,
    detailsProps: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    this.setState({ isLoading: true }, () => this.postForm(ev))
  }

  getName = form => {
    if (!form || !form.elements) return
    const firstName = form.elements["first_name"]
    const lastName = form.elements["last_name"]
    return firstName && lastName && `${firstName.value} ${lastName.value}`
  }

  postForm = ev => {
    const form = ev.target
    const name = this.getName(form)
    const data = serialize(form)
    request(`${this.props.googleSheetsScriptUrl}?${data}`)
      .then(response => {
        console.log("response: ", response)
        if (response.result === "error") throw response.error
        if (response.result === "success") {
          const successMessage =
            name &&
            typeof name === "string" &&
            `✔ ${name}'s response has been saved.`
          this.setState({
            successMessage,
            isFormSuccess: true,
            isLoading: false,
          })
          ev.target.reset()
        }
      })
      .catch(this.handleError)
  }

  handleError = error => {
    const { message } = error
    console.error(message)
    this.setState({
      isFormError: true,
      isLoading: false,
    })
  }

  resetState = () => this.setState(initialState)

  handleRsvpFieldChange = ev => {
    this.setState({ isRsvpFieldChecked: ev.currentTarget.value === "true" })
  }

  render() {
    const { isFormSuccess, successMessage, isFormError } = this.state
    const isJavascriptLoaded = typeof window !== "undefined"

    return (
      <Box
        py={[2, 2, 3]}
        px={2}
        css={`
          min-height: 100%;
        `}
      >
        {isFormError
          ? this.renderError()
          : isFormSuccess
          ? this.renderSuccess(successMessage)
          : this.renderForm(this.state, isJavascriptLoaded)}
      </Box>
    )
  }

  renderError = () => {
    return (
      <>
        <Heading
          fontWeight={[400, 400, 300]}
          textAlign={["center", "center", "left"]}
          as="h3"
          fontSize={["1rem", "1.6rem"]}
        >
          Oops!
        </Heading>
        <Heading
          fontWeight={[400, 400, 300]}
          textAlign={["center", "center", "left"]}
          as="h3"
          fontSize={["1rem", "1.6rem"]}
          mb={4}
        >
          There was an issue saving your request.
        </Heading>
        <Button
          onClick={this.resetState}
          text="Try again"
          style={{ margin: "auto", display: "block" }}
        />
      </>
    )
  }

  renderSuccess = message => {
    return (
      <>
        <Heading
          fontWeight={[400, 400, 300]}
          textAlign={["center", "center", "left"]}
          as="h3"
          fontSize={["1rem", "1.6rem"]}
          mb={3}
        >
          Thank you
        </Heading>
        <Text textAlign={["center", "center", "left"]}>
          {message || "Your response has been saved!"}
        </Text>
        <Box
          as="hr"
          bg="lightGray"
          css={{
            border: 0,
            height: 1,
          }}
          my={4}
        />
        <Details isSummary {...this.props.detailsProps} />
      </>
    )
  }

  renderForm = (state, isJavascriptLoaded) => {
    const { note } = this.props
    const sharedProps = {
      disabled: state.isLoading,
    }

    return (
      <Form name="RSVP" onSubmit={this.handleSubmit}>
        <Heading
          fontWeight={[400, 400, 300]}
          textAlign={["center", "center", "left"]}
          as="h2"
          fontSize={["2rem", "2rem", "3rem"]}
        >
          RSVP
        </Heading>
        {note && (
          <Text my={[3]} lineHeight={1.5}>
            <strong>Note:</strong>{" "}
            <span dangerouslySetInnerHTML={{ __html: note }} />
          </Text>
        )}
        <Noscript>
          Oops! This form doesn't work without JavaScript{" "}
          <span role="img" aria-label="sad face">
            😕
          </span>
        </Noscript>
        {isJavascriptLoaded && (
          <>
            <div>
              <Input
                label="First name"
                type="text"
                name={formItems.firstName}
                required
                {...sharedProps}
              />
              <Input
                label="Last name"
                type="text"
                name={formItems.lastName}
                required
                {...sharedProps}
              />
            </div>
            <Radio
              label="RSVP"
              name={formItems.rsvp}
              min={0}
              required
              onChange={this.handleRsvpFieldChange}
              options={[
                {
                  value: "true",
                  field: (
                    <span css={inlineStyle}>
                      I'll be there!{" "}
                      <span
                        role="img"
                        aria-label="party popper"
                        css={inlineStyle}
                      >
                        🎉
                      </span>
                    </span>
                  ),
                },
                {
                  value: "false",
                  field: (
                    <span css={inlineStyle}>
                      I can't make it{" "}
                      <span
                        role="img"
                        aria-label="crying face"
                        css={inlineStyle}
                      >
                        😢
                      </span>
                    </span>
                  ),
                },
              ]}
              {...sharedProps}
            />
            <Collapse show={this.state.isRsvpFieldChecked}>
              <Input
                label="How many in your party (including yourself)?"
                type="number"
                name={formItems.partyCount}
                min="0"
                {...sharedProps}
              />
            </Collapse>
            <Input
              label="Note"
              type="text"
              name={formItems.notes}
              multiline
              {...sharedProps}
            />
            <StyledButton type="submit" {...sharedProps}>
              {state.isLoading ? <Loader /> : "Submit"}
            </StyledButton>
          </>
        )}
      </Form>
    )
  }
}
