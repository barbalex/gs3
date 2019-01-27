import React from 'react'
import { Jumbotron } from 'reactstrap'
import { FaCloud, FaHdd, FaCommentAlt } from 'react-icons/fa'
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
        <div className="col-lg-4 col-md-6">
          <FaCloud style={style} />
          <H4 style={{ marginTop: 0 }}>Web-Anwendungen</H4>
          <Ul>
            <Li>mit Datenbank- und Anwendungs-Server</Li>
            <Li>im Intranet oder Internet</Li>
            <Li>nach Wunsch mobile- und offline-first</Li>
            <Li>ideal für Geräte- oder Firmen-übergreifende Zusammenarbeit</Li>
          </Ul>
        </div>
        <div className="col-lg-4 col-md-6">
          <FaHdd style={style} />
          <H4>Desktop-Anwendungen</H4>
          <Ul>
            <Li>lokal installiert</Li>
            <Li>auf Windows, Mac und Linux</Li>
            <Li>besonders leistungsfähig oder</Li>
            <Li>beinahe Null-Unterhalt</Li>
          </Ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <FaCommentAlt style={style} />
          <H4>Beratung</H4>
          <Ul>
            <Li>Bedürfnisse abklären...</Li>
            <Li>
              ...und in den "Fachjargon" von Software­ingenieuren übersetzen
            </Li>
            <Li>Risiken minimieren</Li>
            <Li>unabhängige Meinung</Li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

export default IndexPage
