import React from "react"
import Box from "../../Box"

interface Props {}

const Footer = (props: Props) => {
  return (
    <Box
      as="footer"
      sx={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Box>
  )
}

export default Footer
