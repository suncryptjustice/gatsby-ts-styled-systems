// @preval
// This file needs to be a JavaScript file using CommonJS to be compatiable with preval

const { lineHeight: lineHeights } = 1.25

const animation = {
  easeOutCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
}

const breakpoints = ["544px", "768px", "1012px", "1280px"]

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
}

const borderWidths = [0, "1px"]

const radii = ["0", "3px", "6px", "100px"]

const sizes = {
  small: "544px",
  medium: "768px",
  large: "1012px",
  xlarge: "1280px",
}

const fontSizes = [
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "40px",
  "48px",
]

const space = [
  "0",
  "4px",
  "8px",
  "16px",
  "24px",
  "32px",
  "40px",
  "48px",
  "64px",
  "80px",
  "96px",
  "112px",
  "128px",
]

const theme = {
  animation,
  borderWidths,
  breakpoints,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  sizes,
  space,
}

module.exports = {
  theme,
}
