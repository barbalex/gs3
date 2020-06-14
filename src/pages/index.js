import React from 'react'
import { Jumbotron } from 'reactstrap'
import { FaCloud, FaHdd } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/layout'
const style = {
  fontSize: 78,
}

const Page = styled.div`
  padding: 15px;
`
const StyledJumbotron = styled(Jumbotron)`
  margin-top: 15px !important;
  padding-left: 60px !important;
  padding-right: 60px !important;
  background-color: #e0f6da !important;
  li {
    font-size: 21px;
  }
`
const Row = styled.div`
  /* side spacing for mobile first views */
  padding-left: 15px;
  padding-right: 15px;
`
const Ul = styled.ul`
  /*padding-left: 22px;*/
`
const H4 = styled.h4`
  margin-top: 5px !important;
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
`
const H1 = styled.h1`
  font-size: 63px;
  margin-bottom: 0.5rem;
`
const Li = styled.li`
  margin-bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <Page>
      <StyledJumbotron>
        <H1>Gabriel Software</H1>
        <ul>
          <Li>einfach</Li>
          <Li>individuell</Li>
          <Li>zuverlässig</Li>
        </ul>
        <p className="lead" style={{ fontWeight: 400 }}>
          ...damit Sie sich auf Ihre Arbeit konzen­trieren können
        </p>
      </StyledJumbotron>

      <Row className="row marketing">
        <div className="col-md-7">
          <FaCloud style={style} />
          <H4 style={{ marginTop: 0 }}>Web-App</H4>
          <Ul>
            <Li>
              Mit App-Server, Datenbank-Server und Daten-Schnittstelle:
              ermöglicht App-übergreifende Zusammenarbeit
            </Li>
            <Li>Im Intranet oder Internet</Li>
            <Li>
              Mobile-first, offline-first mit leistungsfähiger Konflikt-Lösung,
              live aktualisiert
            </Li>
            <Li>
              {`Progressive Web App, daher nicht von "normalen" Apps
              unterscheidbar`}
            </Li>
            <Li>Ideal für Geräte- oder Firmen-übergreifende Zusammenarbeit</Li>
          </Ul>
        </div>
        <div className="col-md">
          <FaHdd style={style} />
          <H4>Desktop-App</H4>
          <Ul>
            <Li>Lokal installiert</Li>
            <Li>Auf Windows, Mac und Linux</Li>
            <Li>Besonders leistungsfähig oder</Li>
            <Li>Beinahe Null-Unterhalt</Li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

export default IndexPage
