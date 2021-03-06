import React from 'react'
import PropTypes from 'prop-types'
import { ResetCSS, GlobalStyle } from '../styles'
import Header from '../header'

const Layout = ({ headerLinks, children, url }) => {
  return (
    <React.Fragment>
      <Header headerLinks={headerLinks} url={url} />
      <ResetCSS />
      <GlobalStyle />
      <div>{children}</div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
