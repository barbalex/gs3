import React from 'react'
import { Jumbotron } from 'reactstrap'
import { FaDesktop } from 'react-icons/fa'
import { BsCloud } from 'react-icons/bs'
import { MdSmartphone } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/layout'
const style = {
  fontSize: 78,
}
const styleWebApp = {
  fontSize: 94,
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
const H4Cloud = styled.h4`
  margin-top: -11px !important;
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
        <div className="col-md-5">
          <BsCloud style={styleWebApp} />
          <H4Cloud>Web-App</H4Cloud>
          <Ul>
            <Li>Mit App-Server, Datenbank-Server und Daten-Schnittstelle</Li>
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
          <FaDesktop style={style} />
          <H4>Desktop-App</H4>
          <Ul>
            <Li>Lokal installiert</Li>
            <Li>Auf Windows, Mac und Linux</Li>
            <Li>Lösungen mit beinahe null Unterhalt möglich</Li>
          </Ul>
        </div>
        <div className="col-md">
          <MdSmartphone style={style} />
          <H4>Mobile-App</H4>
          <Ul>
            <Li>Auf Android und iOS</Li>
            <Li>Mit desktop kombinierbar (Windows, Mac und Linux)</Li>
            <Li>
              Offline-first mit leistungsfähiger Konflikt-Lösung, live
              aktualisiert
            </Li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

export default IndexPage
