import React from 'react'
import {
  FaRegQuestionCircle,
  FaRetweet,
  FaRegCheckCircle,
  FaWrench,
  FaCrown,
} from 'react-icons/fa'
import { MdGpsFixed } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

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
`
const Li = styled.li`
  margin-bottom: 0;
`
const P = styled.p`
  margin-bottom: 16px;
`
const Lead = styled.p`
  margin-bottom: 16px;
`
const A = styled.a`
  color: #333;
  border-bottom: 1px dashed #333;
  &:hover {
    border-bottom: 1px solid #428bca;
    text-decoration: none;
  }
`

const LeitbildPage = () => (
  <Layout>
    <Page className="page leitbild">
      <Lead className="lead">Ich richte mich nach diesen Leitlinien:</Lead>
      <Row className="row marketing">
        <div className="col-lg-4">
          <FaRegQuestionCircle style={{ fontSize: 40 }} />
          <H4>Verstehen, wie Sie arbeiten</H4>
          <P>
            Je mehr ich Ihre Arbeit verstehe,
            <br />
            je genauer die Anwendung Ihre Arbeit abbildet,
            <br />
            {'desto besser "passt" sie.'}
          </P>
          <P>Und desto kleiner ist das Risiko bei der Einführung.</P>
          <P>
            Wenn Menschen vom selben sprechen, verstehen nicht immer alle
            dasselbe. Klappt etwas nicht? Oft liegt der Hund hier begraben.
          </P>
        </div>
        <div className="col-lg-4">
          <MdGpsFixed style={{ fontSize: 40 }} />
          <H4>Sinn suchen</H4>
          <P>
            Menschen gewöhnen sich erstaunlich gut an Inkonsistenzen. Oft leidet
            darunter die Produktivität.
          </P>
          <P>Software versteht nur Logik.</P>
        </div>
        <div className="col-lg-4">
          <FaRegCheckCircle style={{ fontSize: 40 }} />
          <H4>
            So einfach wie möglich,
            <br />
            so vollständig wie nötig
          </H4>
          <P>
            Ist die Anwendung klar und übersichtlich, arbeiten Sie effizient.
          </P>
          <P>Beansprucht sie zu viel Aufmerksamkeit, passieren Fehler.</P>
          <P>
            Eine elegante Architektur beschleunigt die Entwicklung und reduziert
            den Unterhalt.
          </P>
        </div>
        <div className="col-lg-4">
          <FaWrench style={{ fontSize: 40 }} />
          <H4>Geeignete Technologie wählen</H4>
          <P>
            Wer einen Hammer hat, ist verleitet, in allem einen Nagel zu
            erkennen.
          </P>
          <P>Sie kommen mit einer Schraube zu mir?</P>
          <P>Ich leite Sie zur Kollegin mit dem Schraubenzieher weiter.</P>
          <P>
            Oder lerne zu schrauben. Und freue mich über die angewandte
            Weiterbildung. Natürlich auf meine Kosten.
          </P>
        </div>
        <div className="col-lg-4">
          <FaCrown style={{ fontSize: 40 }} />
          <H4>Der Kunde ist König</H4>
          <P>
            Damit Sie zufrieden sind, braucht es mehr als eine gute Anwendung.
            Ich bin bestrebt:
          </P>
          <Ul>
            <Li>offen zu kommunizieren</Li>
            <Li>rechtzeitig zu agieren</Li>
            <Li>oder besser: einen Schritt voraus</Li>
            <Li>den Aufwand zu minimieren</Li>
            <Li>Vertrauen aufzubauen</Li>
          </Ul>
        </div>
        <div className="col-lg-4">
          <FaRetweet style={{ fontSize: 40 }} />
          <H4>Ich bin austauschbar</H4>
          <P>
            {`Ich arbeite 100% `}
            <A
              href="https://opensource.com/resources/what-open-source"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </A>
            {` unter der `}
            <A
              href="https://choosealicense.com/licenses/isc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              freizügigsten Lizenz
            </A>
            .
          </P>
          <P>
            {`Code und Konzepte werden in der App selbst dokumentiert und sind auf `}
            <A
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </A>
            {` frei verfügbar.`}
          </P>
          <P>
            Ich verwende modernste Methoden. Aber nichts Exotisches: jede
            kompetente JavaScript-Entwicklerin kann das Projekt nach kurzer
            Einarbeit übernehmen.
          </P>
          <P>
            Technologien und Methoden werden laufend aktuell gehalten. Es gibt
            keinen{' '}
            <A
              href="https://martinfowler.com/bliki/TechnicalDebt.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              technical debt.
            </A>
          </P>
        </div>
      </Row>
    </Page>
  </Layout>
)

LeitbildPage.displayName = 'LeitbildPage'

export default LeitbildPage
