import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Gabriel Software" />
    <Helmet>
      <meta charset="UTF-8" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1170,
      }}
    >
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
