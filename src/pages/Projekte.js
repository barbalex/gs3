import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledCarousel } from 'reactstrap'
import styled from 'styled-components'
import { Location } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import apfImg from '../images/apflora.png'
import aeImg from '../images/ae.png'
import bbImg from '../images/bb.png'
import zhLoeweImg from '../images/zhLoewe.png'
import apfloraCarouselItems from '../modules/apfloraCarouselItems'
import aeCarouselItems from '../modules/aeCarouselItems'
import bbCarouselItems from '../modules/bbCarouselItems'
import kaplaCarouseltems from '../modules/kaplaCarouseltems'
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
const Ul = styled.ul`
  padding-left: 22px;
`
const H4 = styled.h4`
  margin-top: 5px;
  font-weight: bold;
`
const Affix = styled(Nav)`
  background-color: transparent;
  border: 1px solid #d8d8d8;
  margin-bottom: 15px !important;
  padding-left: 0;
  border-radius: 5px;
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
`
const StyledNavLink = styled(NavLink)`
  padding: 10px 15px !important;
  background-color: ${props => (props.active ? '#f5f5f5' : 'unset')};
  &:hover {
    background-color: #f5f5f5;
  }
`
const Section = styled.section`
  margin-bottom: 60px;
`

const ProjektPage = () => (
  <Layout>
    <Location>
      {({ location }) => (
        <Page>
          <Column>
            <Affix vertical navbar>
              <NavItem>
                <StyledNavLink
                  href="#apflora"
                  name="apflora"
                  active={location.hash === '#apflora'}
                >
                  apflora.ch
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="#artendb_web"
                  name="artendb_web"
                  active={location.hash === '#artendb_web'}
                >
                  arteigenschaften.ch
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="#blue-borders"
                  name="blue-borders"
                  active={location.hash === '#blue-borders'}
                >
                  mediterranean-
                  <br />
                  migration.com
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="#kapla"
                  name="kapla"
                  active={location.hash === '#kapla'}
                >
                  Kapla
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink
                  href="#awInd"
                  name="awInd"
                  active={location.hash === '#awInd'}
                >
                  AWEL-Indikatoren
                </StyledNavLink>
              </NavItem>
            </Affix>
          </Column>
          <Column>
            <p className="lead">Eine Auswahl von Projekten:</p>
            <Section id="apflora" className="projekt sektion anchor">
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
              <UncontrolledCarousel items={apfloraCarouselItems} />
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://barbalex.github.io/apf2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf der Projekt-Webseite
                </a>
              </p>
            </Section>
            <Section id="artendb_web" className="projekt sektion anchor">
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
                <li>exportieren</li>
                <li>Informationen von Synonymen verbinden</li>
                <li>über Artengruppen hinweg zusammenfassen</li>
                <li>in eigener Anwendung einbinden</li>
              </Ul>
              <p>
                Grösste Stärke ist der einfache Import und Export von Daten. Die
                Absicht dahinter: Alle benötigten Daten können, sofern nicht
                schon enthalten, rasch ergänzt und für Auswertungen kombiniert
                werden.
              </p>
              <UncontrolledCarousel items={aeCarouselItems} />
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
              </p>
            </Section>
            <Section id="blue-borders" className="projekt sektion anchor">
              <img src={bbImg} alt="blue borders" height={51} />
              <H4>mediterranean-migration.com</H4>
              <p>
                Übersicht über die Migration durch das zentrale und östliche
                Mittelmeer.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>massgeschneidert für die Aufgabe</li>
                  <li>
                    rasche Übersicht über Migrationsströme und dazugehörige
                    politische Ereignisse
                  </li>
                </Ul>
              </div>
              <UncontrolledCarousel items={bbCarouselItems} />
              <p>
                Schauen Sie selber:&nbsp;
                <a
                  href="https://mediterranean-migration.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mediterranean-migration.com
                </a>
              </p>
            </Section>
            <Section id="kapla" className="projekt sektion anchor">
              <img src={zhLoeweImg} alt="Kapla" height={51} />
              <H4>Kapla</H4>
              <p>
                Mit Kapla verwaltet die Abteilung Recht des AWEL (Amt für
                Abfall, Wasser, Energie und Luft) des Kantons Zürich ihre
                Geschäfte.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>massgeschneidert für die Aufgabe</li>
                  <li>Benutzerfreundlichkeit</li>
                  <li>null Unterhaltsbedarf</li>
                </Ul>
              </div>
              <UncontrolledCarousel items={kaplaCarouseltems} />
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://github.com/barbalex/kapla3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf GitHub
                </a>
              </p>
            </Section>
            <Section id="awInd" className="projekt sektion anchor">
              <img src={zhLoeweImg} alt="AWEL-Indikatoren" height={51} />
              <H4>AWEL-Indikatoren</H4>
              <p>
                Das AWEL (Amt für Abfall, Wasser, Energie und Luft) des Kantons
                Zürich verwaltet mit dieser Access-Anwendung Indikatoren.
              </p>
              <div>
                Grösste Stärken:
                <Ul>
                  <li>massgeschneidert für die Aufgabe</li>
                  <li>seit der Implementation (2014) null Unterhaltsbedarf</li>
                </Ul>
              </div>
              <UncontrolledCarousel items={aiCarouselitems} />
            </Section>
          </Column>
        </Page>
      )}
    </Location>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage
