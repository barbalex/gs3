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
    onClickNav: () => event => {
      event.preventDefault()
      const { name } = event.target
      const to = name === 'Home' ? '/' : `/${name}/`
      navigate(to)
    },
  }),
)

const Header = ({ open, toggleNavbar, siteTitle, onClickNav }) => (
  <Navbar color="dark" dark expand="lg" fixed="true">
    <NavbarBrand href="/" name="Home" onClick={onClickNav}>
      {siteTitle}
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} />
    <Collapse isOpen={open} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/Leitbild/" name="Leitbild" onClick={onClickNav}>
            Leitbild
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Projekte/" name="Projekte" onClick={onClickNav}>
            Projekte
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/Technologien/"
            name="Technologien"
            onClick={onClickNav}
          >
            Technologien
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Kontakt/" name="Kontakt" onClick={onClickNav}>
            Kontakt
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
)

export default enhance(Header)
