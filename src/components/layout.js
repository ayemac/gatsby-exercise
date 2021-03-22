/* Layout component that originally came with the boilerplate but reconfigured
to pass in copy and link props to the Header component to make it reusable and future-proof. 
Also, footer was taken out!
*/

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header copy={`Hello World`} link={`https://www.google.com`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
