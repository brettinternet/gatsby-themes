import React from "react"
import { css } from "styled-components"
import { createMediaQuery, createMobileMediaQuery } from "utils/mixins"
import { Box } from "components/Basic"

export default props => (
  <Box
    {...props}
    css={`
      ${({ hide, theme }) =>
        hide &&
        (Array.isArray(hide)
          ? theme.breakpoints.map(
              (el, i) =>
                shouldRespectHide(hide[i], hide, i, theme.breakpoints[i]) &&
                css`
                  ${createMediaQuery(theme.breakpoints[i])} {
                    display: none;
                  }
                `
            )
          : shouldRespectHide(hide) &&
            css`
              display: none;
            `)};

      ${({ show, theme }) =>
        show &&
        (Array.isArray(show)
          ? theme.breakpoints.map(
              (el, i) =>
                shouldRespectShow(show[i]) &&
                css`
                  ${createMobileMediaQuery(theme.breakpoints[i])} {
                    display: none;
                  }
                `
            )
          : shouldRespectShow(show) &&
            css`
              display: none;
            `)};
    `}
  />
)

function shouldRespectHide(value) {
  return !!value
}

function shouldRespectShow(value) {
  return !value
}
