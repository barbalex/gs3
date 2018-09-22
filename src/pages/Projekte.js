import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import styled from 'styled-components'
import { Location } from '@reach/router'
import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import apfImg from '../images/apflora.png'
import aeImg from '../images/ae.png'
import bbImg from '../images/bb.png'
import bcImg from '../images/bc.png'
import zhLoeweImg from '../images/zhLoewe.png'
import kaplaImg from '../images/kapla.png'
import apfloraCarouselItems from '../modules/apfloraCarouselItems'
import aeCarouselItems from '../modules/aeCarouselItems'
import bbCarouselItems from '../modules/bbCarouselItems'
import bcCarouselItems from '../modules/bcCarouselitems'
import kaplaCarouselitems from '../modules/kaplaCarouselitems'
import aiCarouselitems from '../modules/aiCarouselitems'

const Page = styled.div`
  padding: 15px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-column-gap: 30px;
  }
  .carousel-caption {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .carousel-control-next-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjYuMDYyIDI2LjA2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYuMDYyIDI2LjA2MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMC43MDcsMTAuMDI4bC04LjgzNS04LjgzNUMxMS4xMDMsMC40MjQsMTAuMDc4LDAsOC45ODUsMEM3Ljg5MywwLDYuODY4LDAuNDI0LDYuMDk5LDEuMTkzDQoJCUw1LjM2MSwxLjkzMUM0LjU5MiwyLjY5OCw0LjE2OCwzLjcyNCw0LjE2OCw0LjgxNnMwLjQyNCwyLjExNywxLjE5MywyLjg4N2w1LjMyOCw1LjMyOGwtNS4zMjgsNS4zMjgNCgkJYy0wLjc2OSwwLjc3LTEuMTkzLDEuNzk0LTEuMTkzLDIuODg3czAuNDI0LDIuMTE4LDEuMTk0LDIuODg3bDAuNzM2LDAuNzM2YzAuNzcsMC43NzEsMS43OTQsMS4xOTMsMi44ODcsMS4xOTMNCgkJczIuMTE3LTAuNDI0LDIuODg3LTEuMTkzbDguODM1LTguODM2YzAuNzg3LTAuNzg1LDEuMjE2LTEuODc1LDEuMTg2LTMuMDAyQzIxLjkyMywxMS45MDUsMjEuNDk2LDEwLjgxNiwyMC43MDcsMTAuMDI4eg0KCQkgTTE5LjI5MywxNC42MTlsLTguODM1LDguODM2Yy0wLjQwMywwLjQwNC0wLjkzOCwwLjYwNy0xLjQ3MywwLjYwN3MtMS4wNjgtMC4yMDMtMS40NzQtMC42MDdsLTAuNzM2LTAuNzM3DQoJCWMtMC44MTEtMC44MDktMC44MTEtMi4xMzUsMC0yLjk0M2w2Ljc0Mi02Ljc0Mkw2Ljc3NSw2LjI4OWMtMC44MTEtMC44MS0wLjgxMS0yLjEzNiwwLTIuOTQzbDAuNzM2LTAuNzM3DQoJCUM3LjkxNywyLjIwMyw4LjQ1MSwyLDguOTg1LDJjMC41MzUsMCwxLjA2OSwwLjIwMywxLjQ3MywwLjYwN2w4LjgzNSw4LjgzNWMwLjQzNiwwLjQzNSwwLjYyOCwxLjAxOCwwLjU5OCwxLjU4OQ0KCQlDMTkuOTIxLDEzLjYwMiwxOS43MjgsMTQuMTg1LDE5LjI5MywxNC42MTl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
  }
  .carousel-control-prev-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI2LjA2MnB4IiBoZWlnaHQ9IjI2LjA2MnB4IiB2aWV3Qm94PSIwIDAgMjYuMDYyIDI2LjA2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYuMDYyIDI2LjA2MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE1LjM3MywxMy4wMzFsNS4zMjgtNS4zMjhjMC43NzEtMC43NywxLjE5My0xLjc5NCwxLjE5My0yLjg4N2MwLTEuMDkzLTAuNDI2LTIuMTE4LTEuMTk0LTIuODg3bC0wLjczNi0wLjczNg0KCQlDMTkuMTk0LDAuNDI0LDE4LjE3LDAsMTcuMDc3LDBTMTQuOTYsMC40MjQsMTQuMTksMS4xOTNsLTguODM1LDguODM1Yy0wLjc4OCwwLjc4OC0xLjIxNiwxLjg3Ny0xLjE4NiwzLjAwMw0KCQljLTAuMDMsMS4xMjcsMC4zOTcsMi4yMTcsMS4xODcsMy4wMDRsOC44MzQsOC44MzRjMC43NywwLjc3MSwxLjc5NCwxLjE5MywyLjg4NywxLjE5M3MyLjExNy0wLjQyNCwyLjg4Ny0xLjE5M2wwLjczNy0wLjczNw0KCQljMC43Ny0wLjc2OCwxLjE5My0xLjc5MywxLjE5My0yLjg4NmMwLTEuMDk0LTAuNDI2LTIuMTE3LTEuMTkzLTIuODg3TDE1LjM3MywxMy4wMzF6IE0xOS4yODcsMjIuNzE2bC0wLjczNywwLjczNw0KCQljLTAuNDAyLDAuNDA0LTAuOTM4LDAuNjA3LTEuNDczLDAuNjA3cy0xLjA2OC0wLjIwMy0xLjQ3My0wLjYwN0w2Ljc3LDE0LjYxN2MtMC40MzYtMC40MzQtMC42MjgtMS4wMTgtMC41OTgtMS41ODgNCgkJYy0wLjAzLTAuNTcxLDAuMTYyLTEuMTU0LDAuNTk4LTEuNTg5bDguODM1LTguODM1QzE2LjAwOSwyLjIwMywxNi41NDMsMiwxNy4wNzcsMnMxLjA2OCwwLjIwMywxLjQ3MywwLjYwN2wwLjczNywwLjczNg0KCQljMC44MTIsMC44MSwwLjgxMiwyLjEzNiwwLDIuOTQ0bC02Ljc0Miw2Ljc0M2w2Ljc0Miw2Ljc0MUMyMC4wOTgsMjAuNTgyLDIwLjA5OCwyMS45MDgsMTkuMjg3LDIyLjcxNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K);
  }
  .carousel-indicators > li {
    border: 1px solid #80808073;
  }
`
const Column = styled.div``
const MainColumn = styled.div`
  scroll-snap-type: y mandatory;
  scroll-padding: 56px;
`
const Ul = styled.ul`
  padding-left: 22px;
`
const H4 = styled.h4`
  margin-top: 5px;
  font-weight: bold;
`
const StyledScrollspy = styled(Scrollspy)`
  background-color: transparent;
  border: 1px solid #d8d8d8;
  margin-bottom: 15px !important;
  padding-left: 0;
  border-radius: 5px;
  list-style: none;
  @media (min-width: 800px) {
    position: fixed;
    margin-bottom: unset;
  }
  li a {
    display: block;
    color: #716b7a;
    font-weight: bold;
    padding: 10px 15px;
  }
  li a:hover {
    text-decoration: none !important;
  }
  .active {
    background-color: #f5f5f5;
  }
`
const A = styled.a`
  padding: 10px 15px !important;
  &:hover {
    background-color: #f5f5f5;
  }
`
const Section = styled.section`
  margin-bottom: 60px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  /**
   * make klick on nav link scroll far enough
   * that image is not hidden by navbar
   */
  margin-top: -60px;
  padding-top: 60px;
`
const P = styled.p`
  margin-bottom: 0;
`

const ProjektPage = () => (
  <Layout>
    <Location>
      {({ location }) => (
        <Page>
          <Column>
            <StyledScrollspy
              items={[
                'apflora',
                'arteigenschaften',
                'kapla',
                'awel-indikatoren',
                'mediterranean-migration',
                'brexit-chronology',
              ]}
              currentClassName="active"
              offset={-50}
            >
              <li>
                <A href="#apflora">apflora.ch</A>
              </li>
              <li>
                <A href="#arteigenschaften">arteigenschaften.ch</A>
              </li>
              <li>
                <A href="#kapla">Kapla</A>
              </li>
              <li>
                <A href="#awel-indikatoren">AWEL-Indikatoren</A>
              </li>
              <li>
                <A href="#brexit-chronology">brexit-chronology.ch</A>
              </li>
              <li>
                <A href="#mediterranean-migration">
                  mediterranean-
                  <br />
                  migration.com
                </A>
              </li>
            </StyledScrollspy>
          </Column>
          <MainColumn>
            <p className="lead">Eine Auswahl von Projekten:</p>
            <Section id="apflora">
              <img src={apfImg} alt="apflora" height={51} />
              <H4>apflora.ch</H4>
              <h5>
                Aktionsplan Flora der Fachstelle Naturschutz des Kantons Zürich
              </h5>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>Komplexe Projektstruktur im Strukturbaum darstellen</li>
                  <li>Aufwändige Jahresberichte auf Knopfdruck produzieren</li>
                </Ul>
              </div>
              <UncontrolledCarousel
                items={apfloraCarouselItems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2013.</P>
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://barbalex.github.io/apf2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf der Projekt-Webseite
                </a>
                .
              </p>
            </Section>
            <Section id="arteigenschaften">
              <img src={aeImg} alt="arteigenschaften.ch" height={51} />
              <H4>arteigenschaften.ch</H4>
              <h5>
                Naturschutzrelevante Informationen über Arten aus den Gruppen
                Fauna, Flora, Moose, Pilze und von Lebensräumen:
              </h5>
              <Ul>
                <li>anzeigen</li>
                <li>importieren</li>
                <li>kombinieren</li>
                <li>Informationen von Synonymen verbinden</li>
                <li>exportieren</li>
                <li>über Artengruppen hinweg zusammenfassen</li>
                <li>in eigener Anwendung einbinden</li>
              </Ul>
              <p>
                Grösste Stärke ist der einfache Import und Export von Daten. Die
                Absicht dahinter: Alle benötigten Daten können, sofern nicht
                schon enthalten, rasch ergänzt und für Auswertungen kombiniert
                werden.
              </p>
              <UncontrolledCarousel
                items={aeCarouselItems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2013.</P>
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://github.com/FNSKtZH/artendb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf GitHub
                </a>
                {' und bei der '}
                <a
                  href="https://aln.zh.ch/internet/baudirektion/aln/de/naturschutz/naturschutzdaten/tools/arteigenschaften.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fachstelle Naturschutz des Kantons Zürich
                </a>
                .
              </p>
            </Section>
            <Section id="kapla">
              <img src={kaplaImg} alt="Kapla" height={51} />
              <H4>Kapla</H4>
              <p>
                Mit Kapla verwaltet die Abteilung Recht des AWEL (Amt für
                Abfall, Wasser, Energie und Luft) des Kantons Zürich ihre
                Geschäfte.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>Massgeschneidert für die Aufgabe</li>
                  <li>Benutzerfreundlichkeit</li>
                  <li>Null Unterhaltsbedarf</li>
                </Ul>
              </div>
              <UncontrolledCarousel
                items={kaplaCarouselitems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2016.</P>
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://github.com/barbalex/kapla3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf GitHub
                </a>
                .
              </p>
            </Section>
            <Section id="awel-indikatoren">
              <img src={zhLoeweImg} alt="AWEL-Indikatoren" height={51} />
              <H4>AWEL-Indikatoren</H4>
              <p>
                Das AWEL (Amt für Abfall, Wasser, Energie und Luft) des Kantons
                Zürich verwaltet mit dieser Access-Anwendung Indikatoren.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>Massgeschneidert für die Aufgabe</li>
                  <li>Bisher null Unterhaltsbedarf</li>
                </Ul>
              </div>
              <UncontrolledCarousel
                items={aiCarouselitems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2014.</P>
            </Section>
            <Section id="brexit-chronology">
              <img src={bcImg} alt="brexit-chronology" height={51} />
              <H4>brexit-chronology.ch</H4>
              <p>
                Chronologie des Brexit aus Sicht Grossbritanniens und der EU.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>Rasche Übersicht über relevante politische Ereignisse</li>
                  <li>
                    Der Autor kann Ereignisse und Artikel direkt bearbeiten -
                    wie bei einem{' '}
                    <a
                      href="https://de.wikipedia.org/wiki/Content-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CMS
                    </a>
                  </li>
                </Ul>
              </div>
              <UncontrolledCarousel
                items={bcCarouselItems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2017.</P>
              <p>
                Schauen Sie selber:&nbsp;
                <a
                  href="https://brexit-chronology.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  brexit-chronology.ch
                </a>
                .
              </p>
            </Section>
            <Section id="mediterranean-migration">
              <img src={bbImg} alt="mediterranean-migration" height={51} />
              <H4>mediterranean-migration.com</H4>
              <p>
                Übersicht über die Migration durch das zentrale und östliche
                Mittelmeer.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>
                    Rasche Übersicht über Migrationsströme und dazugehörige
                    politische Ereignisse
                  </li>
                  <li>
                    Der Autor kann Ereignisse und Artikel direkt bearbeiten -
                    wie bei einem{' '}
                    <a
                      href="https://de.wikipedia.org/wiki/Content-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CMS
                    </a>
                  </li>
                </Ul>
              </div>
              <UncontrolledCarousel
                items={bbCarouselItems}
                autoPlay={false}
                interval={false}
              />
              <P>Im produktiven Einsatz seit 2015.</P>
              <p>
                Schauen Sie selber:&nbsp;
                <a
                  href="https://mediterranean-migration.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mediterranean-migration.com
                </a>
                .
              </p>
            </Section>
          </MainColumn>
        </Page>
      )}
    </Location>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage
