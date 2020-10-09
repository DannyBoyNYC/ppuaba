import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'

// import { IdentityContextProvider } from 'react-netlify-identity'

import {
  useIdentityContext,
  IdentityContextProvider,
} from 'react-netlify-identity-widget'

import 'react-netlify-identity-widget/styles.css'
// code split the modal til you need it!
const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {
  const url = 'https://www.ppuaba.com/.netlify/identity'

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
<<<<<<< HEAD
    <IdentityContextProvider url={url}>
      <Root className="siteRoot">
        <div className="siteContent">
          <Skip href="#main" id="skip-navigation">
            Skip to content
          </Skip>
          <Menu />

          <div id="main">{props.children}</div>
        </div>

        <Footer />
        <Global styles={globalStyles} />
      </Root>
    </IdentityContextProvider>
=======
    <Root className="siteRoot">
      <div className="siteContent">
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        {/* <Header /> */}
        <Menu />
        <div id="main">{props.children}</div>
      </div>
      <Footer />
      <Global styles={globalStyles} />
    </Root>
>>>>>>> master
  )
}

export default Layout
