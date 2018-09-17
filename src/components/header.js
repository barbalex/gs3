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

const Header = ({ siteTitle }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">{siteTitle}</NavbarBrand>
    <NavbarToggler onClick={() => console.log('TODO')} />
    <Collapse isOpen={true} navbar>
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

export default Header
