import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'
import { Location } from '@reach/router'

import Layout from '../components/layout'

const Page = styled.div`
  padding: 15px;
  > p {
    /* side spacing for mobile first views */
    padding-left: 15px;
    padding-right: 15px;
  }
`
const Row = styled.div`
  /* side spacing for mobile first views */
  padding-left: 15px;
  padding-right: 15px;
`
const Ul = styled.ul`
  padding-left: 22px;
`
const H4 = styled.h4`
  margin-top: 5px;
  font-weight: bold;
`
const StyledNavLink = styled(NavLink)`
  border: ${props => (props.active ? '1px white' : 'unset')};
  border-color: rgba(255, 255, 255, 0.5) !important;
`
const Affix = styled(Nav)`
  position: static;
  background-color: transparent;
  border: 1px solid #d8d8d8;
  margin-bottom: 15px;
  padding-left: 0;
  border-radius: 5px;
  .active {
    background-color: #f5f5f5;
  }
  li a {
    display: block;
    color: #716b7a;
    font-weight: bold;
    padding: 10px 15px;
  }
`

const ProjektPage = () => (
  <Layout>
    <Location>
      {({ location }) => (
        <Page className="page projekte">
          <Row className="row marketing">
            <div className="col-lg-2">
              <Affix vertical navbar className="affix">
                <NavItem
                  href="projekte#apflora"
                  className={
                    location.hash === '#apflora' ? 'nav-a active' : 'nav-a'
                  }
                >
                  apflora.ch
                </NavItem>
                <NavItem
                  href="projekte#artendb_web"
                  className={
                    location.hash === '#artendb_web' ? 'nav-a active' : 'nav-a'
                  }
                >
                  arteigenschaften.ch
                </NavItem>
                <NavItem
                  href="projekte#artendb_access"
                  className={
                    location.hash === '#artendb_access'
                      ? 'nav-a active'
                      : 'nav-a'
                  }
                >
                  ArtenDb
                </NavItem>
                <NavItem
                  href="projekte#blue-borders"
                  className={
                    location.hash === '#blue-borders' ? 'nav-a active' : 'nav-a'
                  }
                >
                  mediterranean-
                  <br />
                  migration.com
                </NavItem>
                <NavItem
                  href="projekte#kapla"
                  className={
                    location.hash === '#kapla' ? 'nav-a active' : 'nav-a'
                  }
                >
                  Kapla
                </NavItem>
              </Affix>
            </div>
            <div className="col-lg-10 marketing">Inhalt</div>
          </Row>
        </Page>
      )}
    </Location>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage
