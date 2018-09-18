import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledCarousel } from 'reactstrap'
import styled from 'styled-components'
import { Location } from '@reach/router'

import Layout from '../../components/layout'
import apfImg from '../../images/apflora.png'
import adbWeb01GruppeWaehlenImg from '../../images/artendb_web_01_gruppe_waehlen.png'
import adbWeb02ArtSuchenImg from '../../images/artendb_web_02_art_suchen.png'
import adbWeb03AnzeigenEigenschaftenImg from '../../images/artendb_web_03_anzeigen_eigenschaften.png'
import adbWeb04AnzeigenTaxonomieImg from '../../images/artendb_web_04_anzeigen_taxonomie.png'
import adbWeb05AnzeigenDatensammlungImg from '../../images/artendb_web_05_anzeigen_datensammlung.png'
import adbWeb06AnzeigenBezsammlungImg from '../../images/artendb_web_06_anzeigen_beziehungssammlung.png'
import adbWeb07ExportierenImg from '../../images/artendb_web_07_exportieren.png'
import adbWeb08ExportSchrittweiseImg from '../../images/artendb_web_08_export_schrittweise.png'
import adbWeb09ExportGruppeWaehlenImg from '../../images/artendb_web_09_export_gruppe_waehlen.png'
import adbWeb10ExportEigenschWaehlenImg from '../../images/artendb_web_10_export_eigenschaften_waehlen.png'
import adbWeb11ExportdateiHerunterlaImg from '../../images/artendb_web_11_exportdatei_herunterladen.png'
import adbWeb12ImportierenImg from '../../images/artendb_web_12_importieren.png'
import adbWeb13ImportierenSchrittwImg from '../../images/artendb_web_13_importieren_schrittweise.png'
import adb01GruppeWaehlenImg from '../../images/artendb_access_01_gruppe_waehlen.png'
import adb02ArtSuchenImg from '../../images/artendb_access_02_art_suchen.png'
import adb03TaxonomieAnzeigenImg from '../../images/artendb_access_03_taxonomie_anzeigen.png'
import adb04DatensammlungAnzeigenImg from '../../images/artendb_access_04_datensammlung_anzeigen.png'
import adb05BeziehungenAnzeigenImg from '../../images/artendb_access_05_beziehungen_anzeigen.png'
import adb06ExportierenImg from '../../images/artendb_access_06_exportieren.png'
import adb07ExportdatenWaehlenImg from '../../images/artendb_access_07_exportdaten_waehlen.png'
import bbImg from '../../images/bb.png'
import bb1Img from '../../images/bb1.png'
import bb2Img from '../../images/bb2.png'
import bb3Img from '../../images/bb3.png'
import zhLoeweImg from '../../images/zhLoewe.png'
import gsListeImg from '../../images/gs_liste.png'
import gsFilternImg from '../../images/gs_filtern.png'
import gsBearbImg from '../../images/gs_bearb.png'
import gsBerichteImg from '../../images/gs_berichte.png'
import gsExportImg from '../../images/gs_export.png'
import apfloraCarouselItems from './apfloraCarouselItems'

const Page = styled.div`
  padding: 15px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-column-gap: 30px;
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
`
const Section = styled.section`
  margin-bottom: 40px;
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
                  href="#artendb_access"
                  name="artendb_access"
                  active={location.hash === '#artendb_access'}
                >
                  ArtenDb
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
              <p style={{ marginBottom: 0 }}>Grösste Stärken:</p>
              <Ul>
                <li>Komplexe Projektstruktur im Strukturbaum darstellen</li>
                <li>Jahresberichte auf Knopfdruck produzieren</li>
              </Ul>
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
              <div
                className="glyphicon glyphicon-info-sign"
                style={{ fontSize: 40 }}
              />
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
              <p>
                Mehr Informationen&nbsp;
                <a
                  href="https://github.com/FNSKtZH/artendb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf GitHub
                </a>
              </p>
            </Section>
            <Section id="artendb_access" className="projekt sektion anchor">
              <div
                className="glyphicon glyphicon-info-sign"
                style={{ fontSize: 40 }}
              />
              <H4>
                ArtenDb <small>(Access-Anwendung)</small>
              </H4>
              <h5>Informationen über Arten und Lebensräume:</h5>
              <Ul>
                <li>nachschlagen</li>
                <li>exportieren</li>
                <li>in eigener Anwendung einbinden</li>
              </Ul>
              <p>
                Mehr Informationen{' '}
                <a
                  href="http://www.aln.zh.ch/internet/baudirektion/aln/de/naturschutz/naturschutzdaten/tools/arten_db.html#a-content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auf der Webseite der Fachstelle Naturschutz des Kantons Zürich
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
              <p>
                Grösste Stärke: rasche Übersicht über Migrationsströme und
                dazugehörige politische Ereignisse.
              </p>
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
              <p>
                Grösste Stärken: Benutzerfreundlichkeit, geringer
                Unterhaltsbedarf.
              </p>
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
          </Column>
        </Page>
      )}
    </Location>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage
