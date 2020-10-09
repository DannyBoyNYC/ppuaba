import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import { useIdentityContext } from 'react-netlify-identity'

const Header = styled.header`
  background: ${props => props.theme.colors.ppuaba};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex-wrap: nowrap;
    }
  }

  li {
    display: inline-block;
    margin-left: 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin-left: 1em;
    }

    &:first-of-type {
      position: relative;
      margin: 0;
      margin-bottom: 1rem;
      flex-basis: 100%;
      line-height: 1.5;
      font-size: 1.5rem;
      /* font-family: Georgia, 'Times New Roman', Times, serif; */
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        font-size: 1.25rem;
        margin-bottom: 0;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
