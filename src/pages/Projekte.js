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
  padding: 10px 15px !important;
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
  background-color: ${props => (props.active ? '#f5f5f5' : 'unset')};
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
      {({ location }) => {
        console.log('hash:', location.hash)
        return (
          <Page className="page projekte">
            <Row className="row marketing">
              <div className="col-lg-2">
                <Affix vertical navbar>
                  <NavItem>
                    <StyledNavLink
                      href="#apflora"
                      name="apflora"
                      active={location.hash === '#apflora'}
                    >
                      apflora.ch
                    </StyledNavLink>
                  </NavItem>
                  <NavItem>
                    <StyledNavLink
                      href="#artendb_web"
                      name="artendb_web"
                      active={location.hash === '#artendb_web'}
                    >
                      arteigenschaften.ch
                    </StyledNavLink>
                  </NavItem>
                  <NavItem>
                    <StyledNavLink
                      href="#artendb_access"
                      name="artendb_access"
                      active={location.hash === '#artendb_access'}
                    >
                      ArtenDb
                    </StyledNavLink>
                  </NavItem>
                  <NavItem>
                    <StyledNavLink
                      href="#blue-borders"
                      name="blue-borders"
                      active={location.hash === '#blue-borders'}
                    >
                      mediterranean-
                      <br />
                      migration.com
                    </StyledNavLink>
                  </NavItem>
                  <NavItem>
                    <StyledNavLink
                      href="#kapla"
                      name="kapla"
                      active={location.hash === '#kapla'}
                    >
                      Kapla
                    </StyledNavLink>
                  </NavItem>
                </Affix>
              </div>
              <div className="col-lg-10 marketing">Inhalt</div>
            </Row>
          </Page>
        )
      }}
    </Location>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage
