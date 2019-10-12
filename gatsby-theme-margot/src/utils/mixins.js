export const num = n => typeof n === "number" && !isNaN(n)
export const px = n => (num(n) && n !== 0 ? n + "px" : n)
export const createMediaQuery = n => `@media screen and (max-width: ${ px(n) })`
export const createMobileMediaQuery = n =>
  `@media screen and (min-width: ${ px(n) })`
