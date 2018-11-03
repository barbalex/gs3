import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { FaShare } from 'react-icons/fa'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { window, exists } from 'browser-monads'
import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })

const StyledNavbar = styled(Navbar)`
  &.bg-dark {
    background-color: #145f00 !important;
  }
`
const StyledNavbarBrand = styled(NavbarBrand)`
  font-weight: 600;
`
const StyledNavLink = styled(NavLink)`
  border: ${props => (props.active ? '1px white' : 'unset')};
  border-color: rgba(255, 255, 255, 0.5) !important;
  font-weight: ${props => (props.active ? '700' : '600')};
  color: ${props =>
    props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'} !important;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <Location>
      {({ location }) => (
        <StyledNavbar
          color="dark"
          dark
          expand="md"
          sticky="top"
          role="navigation"
        >
          <StyledNavbarBrand tag={Link} to="/">
            {siteTitle}
          </StyledNavbarBrand>
          <NavbarToggler
            aria-label="toggle Navbar"
            onClick={() => setOpen(!open)}
          />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Leitbild/"
                  active={location.pathname === '/Leitbild/'}
                >
                  Leitbild
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Projekte/"
                  active={location.pathname === '/Projekte/'}
                >
                  Projekte
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Technologien/"
                  active={location.pathname === '/Technologien/'}
                >
                  Technologien
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  tag={Link}
                  to="/Kontakt/"
                  active={location.pathname === '/Kontakt/'}
                >
                  Kontakt
                </StyledNavLink>
              </NavItem>
              {exists(window) &&
                window.navigator &&
                window.navigator.share && (
                  <NavItem>
                    <StyledNavLink
                      href="#"
                      onClick={() => {
                        window.navigator.share({
                          title: 'Gabriel Software',
                          url: 'https://gabriel-software.ch',
                        })
                      }}
                    >
                      <FaShare /> Teilen
                    </StyledNavLink>
                  </NavItem>
                )}
            </Nav>
          </Collapse>
        </StyledNavbar>
      )}
    </Location>
  )
}

export default Header
