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

const enhance = compose(
  withState('open', 'setOpen', false),
  withHandlers({
    toggleNavbar: ({ open, setOpen }) => () => {
      setOpen(!open)
    },
  }),
)

const Header = ({ open, toggleNavbar, siteTitle }) => (
  <Navbar color="dark" dark expand="lg" fixed="true">
    <NavbarBrand
      href="/"
      onClick={event => {
        event.preventDefault()
        navigate('/')
      }}
    >
      {siteTitle}
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} />
    <Collapse isOpen={open} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            href="/Leitbild/"
            onClick={event => {
              event.preventDefault()
              navigate('/Leitbild/')
            }}
          >
            Leitbild
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/Projekte/"
            onClick={event => {
              event.preventDefault()
              console.log('TODO')
            }}
          >
            Projekte
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/Technologien/"
            onClick={event => {
              event.preventDefault()
              navigate('/Technologien/')
            }}
          >
            Technologien
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/Kontakt/"
            onClick={event => {
              event.preventDefault()
              navigate('/Kontakt/')
            }}
          >
            Kontakt
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
)

export default enhance(Header)
