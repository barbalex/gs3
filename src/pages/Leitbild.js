import React from 'react'
import {
  FaRegQuestionCircle,
  FaRetweet,
  FaRegCheckCircle,
  FaWrench,
  FaCrown,
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
  padding-left: 22px;
`
const H4 = styled.h4`
  margin-top: 5px;
  font-weight: bold;
`

const LeitbildPage = () => (
  <Layout>
    <Page className="page leitbild">
      <p className="lead">Ich richte mich nach diesen Leitlinien:</p>
      <Row className="row marketing">
        <div className="col-lg-4">
          <FaRegQuestionCircle style={{ fontSize: 40 }} />
          <H4>Verstehen, wie Sie arbeiten</H4>
          <p>
            Je mehr ich Ihre Arbeit verstehe,
            <br />
            je genauer die Anwendung Ihre Arbeit abbildet,
            <br />
            desto besser "passt" sie.
          </p>
          <p>Und desto kleiner ist das Risiko bei der Einführung.</p>
          <p>
            Wenn Menschen vom selben sprechen, verstehen nicht immer alle
            dasselbe. Klappt etwas nicht? Oft liegt der Hund hier begraben.
          </p>
        </div>
        <div className="col-lg-4">
          <FaRetweet style={{ fontSize: 40 }} />
          <H4>Sinn suchen</H4>
          <p>
            Menschen gewöhnen sich erstaunlich gut an Inkonsistenzen. Oft leidet
            darunter die Produktivität.
          </p>
          <p>Software versteht nur Logik.</p>
        </div>
        <div className="col-lg-4">
          <FaRegCheckCircle style={{ fontSize: 40 }} />
          <H4>
            So einfach wie möglich,
            <br />
            so vollständig wie nötig
          </H4>
          <p>
            Ist die Anwendung klar und übersichtlich, arbeiten Sie effizient.
          </p>
          <p>Beansprucht sie zu viel Aufmerksamkeit, passieren Fehler.</p>
          <p>
            Eine elegante Architektur beschleunigt die Entwicklung und reduziert
            den Unterhalt.
          </p>
        </div>
        <div className="col-lg-4">
          <FaWrench style={{ fontSize: 40 }} />
          <H4>Geeignete Technologie wählen</H4>
          <p>
            Wer einen Hammer hat, ist verleitet, in allem einen Nagel zu
            erkennen.
          </p>
          <p>Sie kommen mit einer Schraube zu mir?</p>
          <p>Ich leite Sie zur Kollegin mit dem Schraubenzieher weiter.</p>
          <p>
            Oder lerne zu schrauben. Und freue mich über die angewandte
            Weiterbildung. Natürlich auf meine Kosten.
          </p>
        </div>
        <div className="col-lg-4">
          <FaCrown style={{ fontSize: 40 }} />
          <H4 style={{ marginTop: 13 }}>Der Kunde ist König</H4>
          <p>
            Damit Sie zufrieden sind, braucht es mehr als eine gute Anwendung.
            Ich bin bestrebt:
          </p>
          <Ul>
            <li>offen zu kommunizieren</li>
            <li>rechtzeitig zu agieren</li>
            <li>oder besser: einen Schritt voraus</li>
            <li>den Aufwand zu minimieren</li>
            <li>Vertrauen aufzubauen</li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

LeitbildPage.displayName = 'LeitbildPage'

export default LeitbildPage
