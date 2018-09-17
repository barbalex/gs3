import React from 'react'
import { Link } from 'gatsby'
import { Jumbotron } from 'reactstrap'
import { FaCloud, FaHdd, FaCommentAlt } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Jumbotron>
      <h1>Gabriel Software</h1>
      <ul>
        <li>einfach</li>
        <li>individuell</li>
        <li>zuverlässig</li>
      </ul>
      <p className="lead" style={{ fontWeight: 400 }}>
        ...damit Sie sich auf Ihre Arbeit konzen­trieren können
      </p>
    </Jumbotron>

    <div className="row marketing">
      <div className="col-lg-4 col-md-6">
        <FaCloud style={{ fontSize: 88 }} />
        <h4 style={{ marginTop: 0 }}>Web-Anwendungen</h4>
        <ul>
          <li>mit Datenbank- und Anwendungs-Server</li>
          <li>im Intranet oder Internet</li>
          <li>nach Wunsch mobile- und offline-first</li>
          <li>ideal für Geräte- oder Firmen-übergreifende Zusammenarbeit</li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6">
        <FaHdd
          style={{
            fontSize: 63,
            marginTop: 10,
            marginBottom: 7,
          }}
        />
        <h4>Desktop-Anwendungen</h4>
        <ul>
          <li>lokal installiert</li>
          <li>auf Windows, Mac und Linux</li>
          <li>besonders leistungsfähig oder</li>
          <li>beinahe Null-Unterhalt</li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-12">
        <FaCommentAlt style={{ fontSize: 78 }} />
        <h4>Beratung</h4>
        <ul>
          <li>Bedürfnisse abklären...</li>
          <li>
            ...und in den "Fachjargon" von Software­ingenieuren übersetzen
          </li>
          <li>Risiken minimieren</li>
          <li>unabhängige Meinung</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
