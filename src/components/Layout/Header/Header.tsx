import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Box from "../../Box"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <Box
    as="header"
    sx={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Box
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Box as="h1" sx={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Box>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
