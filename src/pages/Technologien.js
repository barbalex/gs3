import React from 'react'
import {
  FaWrench,
  FaDatabase,
  FaLinux,
  FaApple,
  FaWindows,
} from 'react-icons/fa'
import styled from 'styled-components'

import Layout from '../components/layout'

const H4 = styled.h4`
  margin-top: 5px;
  font-weight: bold;
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

const TechnologienPage = () => (
  <Layout>
    <div id="technologien" className="page technologien">
      <p className="lead">Mit diesen Technologien kenne ich mich aus:</p>
      <div className="row marketing">
        <div className="col-lg-4">
          <FaLinux style={{ fontSize: 30 }} alt="Linux" />
          <FaApple style={{ fontSize: 30 }} alt="MaxOs" />
          <FaWindows style={{ fontSize: 30 }} alt="Windows" />
          <H4>Betriebssysteme</H4>
          <ul>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Microsoft_Windows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Windows
              </A>
              <P>Der Benutzerfreundliche</P>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Ubuntu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ubuntu Linux
              </A>
              <P>Der Server-Meister</P>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Mac_OS_X"
                target="_blank"
                rel="noopener noreferrer"
              >
                macOS
              </A>
              <P>Entwickler fliegen drauf...</P>
            </li>
          </ul>
          <FaDatabase style={{ fontSize: 30 }} />
          <H4 style={{ marginTop: 5 }}>Datenbanken</H4>
          <ul>
            <li>
              <A
                href="http://www.postgresql.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL
              </A>
              <P>Der Klassenprimus</P>
            </li>
            <li>
              <A
                href="http://couchdb.apache.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                CouchDB
              </A>
              <P>Der Synchronisations-Meister</P>
            </li>
            <li>
              <A
                href="https://pouchdb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PouchDB
              </A>
              <P>CouchDB im Browser</P>
            </li>
            <li>
              <A
                href="http://www.sqlite.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQLite
              </A>
              <P>{`Simpler geht's nimmer`}</P>
            </li>
            <li>
              <A
                href="http://www.mysql.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL
              </A>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Microsoft_Access"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Access
              </A>
            </li>
          </ul>
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
          <ul>
            <li>
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
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/JavaScript_Object_Notation"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </A>
              <P>Hierarchische Datenstrukturen</P>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Cascading_Style_Sheets"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </A>
              <P>Layouten</P>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/Hypertext_Markup_Language"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML
              </A>
            </li>
            <li>
              <A
                href="http://de.wikipedia.org/wiki/SQL"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL
              </A>
              <P>
                Nach wie vor der Standard, um Daten abzufragen und zu
                manipulieren
              </P>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <FaWrench style={{ fontSize: 30 }} />
          <H4 style={{ marginTop: 0 }}>
            Werkzeuge <small>(Auswahl)</small>
          </H4>
          <ul>
            <li>
              <A
                href="http://http://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                node.js
              </A>
              <P>JavaScript auf PC und Server</P>
            </li>
            <li>
              <A
                href="http://electron.atom.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                electron
              </A>
              <P>JavaScript-Anwendungen lokal installieren</P>
            </li>
            <li>
              <A
                href="https://flow.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                flow
              </A>
              <P>Findet Fehler, bevor der Code ausgeführt wird</P>
            </li>
            <li>
              <A
                href="http://hapijs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hapi
              </A>
              <P>Meister Server</P>
            </li>
            <li>
              <A
                href="http://webpack.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                webpack
              </A>
              <P>Entwicklungsumgebung konfigurieren</P>
            </li>
            <li>
              <A
                href="https://facebook.github.io/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </A>
              <P>
                Die Benutzeroberfläche ist eine Funktion der Anwendungsdaten
              </P>
            </li>
            <li>
              <A
                href="//graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL
              </A>
              &nbsp;und&nbsp;
              <A
                href="https://www.apollographql.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apollo
              </A>
              <P>Die Anwendungsdaten sind eine Funktion der Abfrage</P>
            </li>
            <li>
              <A
                href="https://mobx.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                MobX
              </A>
              ,{' '}
              <A
                href="https://github.com/mobxjs/mobx-state-tree"
                target="_blank"
                rel="noopener noreferrer"
              >
                MobX-State-Tree
              </A>
              <P>Meister im Manipulieren von Anwendungsdaten</P>
            </li>
            <li>
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
            </li>
            <li>
              <A
                href="https://github.com/styled-components/styled-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                styled-components
              </A>
              <P>CSS für Komponenten</P>
            </li>
            <li>
              <A
                href="http://docs.couchdb.org/en/2.0.0/couchapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                CouchApp
              </A>
              <P>
                CouchDB-Datenbank, Server und Anwendung in Einem! Läuft und
                läuft und läuft...
              </P>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

TechnologienPage.displayName = 'TechnologienPage'

export default TechnologienPage
