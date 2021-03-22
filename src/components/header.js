/*
 Header Component
 Rather than hardcoding the heading copy and the link,I decided to pass in variables so the code can be future-proof
incase the copy or the hyperlink ever needed to be changed.
*/

import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ copy, link }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.45rem`,
      }}
    >
      {/* Hyperlink tag that in link prop, I got rid of the underline because the instructions didn't say the header needed to be styled with an underline. */}
      <a href={link} style={{ textDecoration: `none` }}>
        {/* H1 Section heading displays copy prop in red */}
        <h1 style={{ margin: 0, color: `red` }}>
          {copy}
        </h1>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
