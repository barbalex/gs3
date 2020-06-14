import React from 'react'
import {
  FaWrench,
  FaDatabase,
  FaLinux,
  FaApple,
  FaWindows,
} from 'react-icons/fa'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  /*padding-left: 22px;*/
`
const H4 = styled.h4`
  margin-top: 5px !important;
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
`
const A = styled.a`
  color: #333;
  border-bottom: 1px dashed #333;
  &:hover {
    border-bottom: 1px solid #428bca;
    text-decoration: none;
  }
`
const P = styled.p`
  margin-bottom: -2px;
`
const Li = styled.li`
  margin-bottom: 0;
`
const Lead = styled.p`
  margin-bottom: 16px;
`

const TechnologienPage = () => (
  <Layout>
    <Page className="page technologien">
      <Lead className="lead">Mit diesen Technologien kenne ich mich aus:</Lead>
      <Row className="row marketing">
        <div className="col-lg-4">
          <FaLinux style={{ fontSize: 30 }} alt="Linux" />
          <FaApple style={{ fontSize: 30 }} alt="MaxOs" />
          <FaWindows style={{ fontSize: 30 }} alt="Windows" />
          <H4>Betriebssysteme</H4>
          <Ul>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Microsoft_Windows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Windows
              </A>
              <P>Der Benutzerfreundliche</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Ubuntu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ubuntu Linux
              </A>
              <P>Der Server-Meister</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Mac_OS_X"
                target="_blank"
                rel="noopener noreferrer"
              >
                MacOS
              </A>
              <P>Entwickler fliegen drauf</P>
            </Li>
          </Ul>
          <FaDatabase style={{ fontSize: 30 }} />
          <H4 style={{ marginTop: 5 }}>Datenbanken</H4>
          <Ul>
            <Li>
              <A
                href="http://www.postgresql.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL
              </A>
              <P>Der Klassenprimus</P>
            </Li>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/PostGIS"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostGIS
              </A>
              <P>Erweitert PostgreSQL zur mächtigen Geo-Datenbank</P>
            </Li>
            <Li>
              <A
                href="http://couchdb.apache.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                CouchDB
              </A>
              <P>Der Synchronisations-Meister</P>
            </Li>
            <Li>
              <A
                href="https://pouchdb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PouchDB
              </A>
              <P>CouchDB im Browser</P>
            </Li>
            <Li>
              <A
                href="http://www.sqlite.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQLite
              </A>
              <P>{`Simpler geht's nimmer`}</P>
            </Li>
          </Ul>
        </div>
        <div className="col-lg-4">
          <div
            style={{
              fontStyle: 'oblique',
              fontSize: 16,
              fontWeight: 600,
              marginTop: 9,
              color: 'grey',
            }}
          >
            {'if ( ... ) then \u007B ... \u007D'}
          </div>
          <H4 style={{ marginTop: 3 }}>Programmiersprachen</H4>
          <Ul>
            <Li>
              <A
                href="http://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </A>
              <P>
                Die verbreitetste Programmiersprache. Vermutlich auch die
                vielfältigste und sich am schnellsten weiter entwickelnde
              </P>
            </Li>
            <Li>
              <A
                href="http://http://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                node.js
              </A>
              <P>JavaScript auf PC und Server</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/JavaScript_Object_Notation"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </A>
              <P>Hierarchische Datenstrukturen</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Cascading_Style_Sheets"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </A>
              <P>Layouten</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Hypertext_Markup_Language"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML
              </A>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/SQL"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL
              </A>
              <P>
                Nach wie vor der Standard, um Daten in der Datenbank abzufragen
                und zu manipulieren
              </P>
            </Li>
            <Li>
              <A
                href="//graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL
              </A>
              <P>Der neue Standard, um Daten von der API abzufragen</P>
            </Li>
          </Ul>
        </div>
        <div className="col-lg-4">
          <FaWrench style={{ fontSize: 30 }} />
          <H4 style={{ marginTop: 0 }}>
            Werkzeuge <small>(Auswahl)</small>
          </H4>
          <Ul>
            <Li>
              <A
                href="http://electron.atom.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                electron
              </A>
              <P>JavaScript-Anwendungen lokal installieren</P>
            </Li>
            <Li>
              <A
                href="http://hapijs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hapi
              </A>
              <P>Meister Server</P>
            </Li>
            <Li>
              <A
                href="https://www.graphile.org/postgraphile"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostGraphile
              </A>{' '}
              und{' '}
              <A
                href="https://hasura.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hasura
              </A>
              <P>{`GraphQL-Schnittstellen für PostgreSQL`}</P>
            </Li>

            <Li>
              <A
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </A>
              <P>
                Web-App-Entwicklungswerkzeug. Ermöglicht sehr kurze Ladezeiten
              </P>
            </Li>
            <Li>
              <A
                href="https://facebook.github.io/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </A>
              {' und '}
              <A
                href="https://github.com/mobxjs/mobx-state-tree"
                target="_blank"
                rel="noopener noreferrer"
              >
                MobX-State-Tree
              </A>
              <P>
                Die Benutzeroberfläche ist eine Funktion von Anwendungsdaten und
                Benutzereingaben
              </P>
            </Li>
            <Li>
              <A
                href="http://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </A>
              &nbsp;und&nbsp;
              <A
                href="http://www.material-ui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material UI
              </A>
              <P>Layouten nach Google und Microsoft</P>
            </Li>
            <Li>
              <A
                href="https://github.com/styled-components/styled-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                styled-components
              </A>
              <P>CSS für Komponenten</P>
            </Li>
            <Li>
              <A
                href="http://openlayers.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenLayers
              </A>
              ,&nbsp;
              <A
                href="http://leafletjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leaflet
              </A>
              ,&nbsp;
              <A
                href="http://www.geo.admin.ch/internet/geoportal/de/home/services/geoservices/display_services/api_services.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeoAdmin API
              </A>
              &nbsp;und&nbsp;
              <A
                href="https://developers.google.com/maps/?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps API
              </A>
              <P>Karten einbinden</P>
            </Li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

TechnologienPage.displayName = 'TechnologienPage'

export default TechnologienPage
