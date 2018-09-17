import React from 'react'

import linuxSwImg from '../images/linux_sw.png'
import appleImg from '../images/apple.png'
import windowsImg from '../images/windows_sw.png'
import databaseImg from '../images/database.png'

const TechnologienPage = () => (
  <div id="technologien" className="page technologien not_home">
    <p className="lead">Mit diesen Technologien kenne ich mich aus:</p>
    <div className="row marketing">
      <div className="col-lg-4">
        <img src={linuxSwImg} alt="Linux" height="30" width="30" />
        <img src={appleImg} alt="MaxOs" height="30" width="30" />
        <img src={windowsImg} alt="Windows" height="30" width="30" />
        <h4>Betriebssysteme</h4>
        <ul>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Microsoft_Windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Windows
            </a>
            <p>Der Benutzerfreundliche</p>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Ubuntu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubuntu Linux
            </a>
            <p>Der Server-Meister</p>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Mac_OS_X"
              target="_blank"
              rel="noopener noreferrer"
            >
              macOS
            </a>
            <p>Entwickler fliegen drauf...</p>
          </li>
        </ul>
        <img
          src={databaseImg}
          alt="Datenbanken"
          height="30"
          width="30"
          style={{ marginTop: 30, marginLeft: -4 }}
        />
        <h4 style={{ marginTop: 5 }}>Datenbanken</h4>
        <ul>
          <li>
            <a
              href="http://www.postgresql.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostgreSQL
            </a>
            <p>Der Klassenprimus</p>
          </li>
          <li>
            <a
              href="http://couchdb.apache.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              CouchDB
            </a>
            <p>Der Synchronisations-Meister</p>
          </li>
          <li>
            <a
              href="https://pouchdb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PouchDB
            </a>
            <p>CouchDB im Browser</p>
          </li>
          <li>
            <a
              href="http://www.sqlite.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQLite
            </a>
            <p>{`Simpler geht's nimmer`}</p>
          </li>
          <li>
            <a
              href="http://www.mysql.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySQL
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Microsoft_Access"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Access
            </a>
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
        <h4 style={{ marginTop: 3 }}>Programmiersprachen</h4>
        <ul>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript
            </a>
            <p>
              Die verbreitetste Programmiersprache. Vermutlich auch die
              vielfältigste und sich am schnellsten weiter entwickelnde
            </p>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/JavaScript_Object_Notation"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSON
            </a>
            <p>Hierarchische Datenstrukturen</p>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Cascading_Style_Sheets"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>
            <p>Layouten</p>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Hypertext_Markup_Language"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/SQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL
            </a>
            <p>
              Nach wie vor der Standard, um Daten abzufragen und zu manipulieren
            </p>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="glyphicon glyphicon-wrench" style={{ fontSize: 30 }} />
        <h4 style={{ marginTop: 0 }}>
          Werkzeuge <small>(Auswahl)</small>
        </h4>
        <ul>
          <li>
            <a
              href="http://http://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              node.js
            </a>
            <p>JavaScript auf PC und Server</p>
          </li>
          <li>
            <a
              href="http://electron.atom.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              electron
            </a>
            <p>JavaScript-Anwendungen lokal installieren</p>
          </li>
          <li>
            <a
              href="https://flow.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              flow
            </a>
            <p>Findet Fehler, bevor der Code ausgeführt wird</p>
          </li>
          <li>
            <a
              href="http://hapijs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hapi
            </a>
            <p>Meister Server</p>
          </li>
          <li>
            <a
              href="http://webpack.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              webpack
            </a>
            <p>Entwicklungsumgebung konfigurieren</p>
          </li>
          <li>
            <a
              href="https://facebook.github.io/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <p>
              Die Benutzeroberfläche ist eine Funktion der Anwendungsdaten.
              Revolutionär!
            </p>
          </li>
          <li>
            <a href="//graphql.org/" target="_blank" rel="noopener noreferrer">
              GraphQL
            </a>
            &nbsp;und&nbsp;
            <a
              href="https://www.apollographql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apollo
            </a>
            <p>
              Die Anwendungsdaten sind eine Funktion der Abfrage. Revolutionär!
            </p>
          </li>
          <li>
            <a
              href="https://mobx.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              MobX
            </a>
            <p>Meister im Manipulieren von Anwendungsdaten</p>
          </li>
          <li>
            <a
              href="http://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bootstrap
            </a>
            &nbsp;und&nbsp;
            <a
              href="http://www.material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
            <p>Layouten nach Google und Microsoft</p>
          </li>
          <li>
            <a
              href="https://github.com/styled-components/styled-components"
              target="_blank"
              rel="noopener noreferrer"
            >
              styled-components
            </a>
            <p>CSS für Komponenten. Genial!</p>
          </li>
          <li>
            <a
              href="http://docs.couchdb.org/en/2.0.0/couchapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              CouchApp
            </a>
            <p>
              CouchDB-Datenbank, Server und Anwendung in Einem! Läuft und läuft
              und läuft...
            </p>
          </li>
          <li>
            <a
              href="http://openlayers.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenLayers
            </a>
            ,&nbsp;
            <a
              href="http://leafletjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leaflet
            </a>
            ,&nbsp;
            <a
              href="http://www.geo.admin.ch/internet/geoportal/de/home/services/geoservices/display_services/api_services.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeoAdmin API
            </a>
            &nbsp;und&nbsp;
            <a
              href="https://developers.google.com/maps/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps API
            </a>
            <p>Karten einbinden</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

TechnologienPage.displayName = 'TechnologienPage'

export default TechnologienPage
