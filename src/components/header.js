import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { navigate } from 'gatsby'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'
import { Location } from '@reach/router'

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
  font-weight: 600;
`

const enhance = compose(
  withState('open', 'setOpen', false),
  withHandlers({
    toggleNavbar: ({ open, setOpen }) => () => {
      setOpen(!open)
    },
    onClickNav: () => event => {
      event.preventDefault()
      const { name } = event.target
      const to = name === 'Home' ? '/' : `/${name}/`
      navigate(to)
    },
  }),
)

const Header = ({ open, toggleNavbar, siteTitle, onClickNav }) => {
  return (
    <Location>
      {({ location }) => (
        <StyledNavbar
          color="dark"
          dark
          expand="lg"
          sticky="top"
          role="navigation"
        >
          <StyledNavbarBrand href="/" name="Home" onClick={onClickNav}>
            {siteTitle}
          </StyledNavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <StyledNavLink
                  href="/Leitbild/"
                  name="Leitbild"
                  onClick={onClickNav}
                  active={location.pathname === '/Leitbild/'}
                >
                  Leitbild
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="/Projekte/"
                  name="Projekte"
                  onClick={onClickNav}
                  active={location.pathname === '/Projekte/'}
                >
                  Projekte
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="/Technologien/"
                  name="Technologien"
                  onClick={onClickNav}
                  active={location.pathname === '/Technologien/'}
                >
                  Technologien
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="/Kontakt/"
                  name="Kontakt"
                  onClick={onClickNav}
                  active={location.pathname === '/Kontakt/'}
                >
                  Kontakt
                </StyledNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </StyledNavbar>
      )}
    </Location>
  )
}

export default enhance(Header)
