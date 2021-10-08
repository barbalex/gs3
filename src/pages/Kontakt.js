import React from 'react'
import { MapContainer, ScaleControl, TileLayer, Marker } from 'react-leaflet'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { window, exists } from 'browser-monads'

import alexImg from '../images/alex.jpg'
import Layout from '../components/layout'
import iconsvg from '../utils/icon.svg'

const Page = styled.div`
  padding: 15px;
`
const Row = styled.div``
const Col = styled.div`
  /* side spacing for mobile first views */
  padding: 10px !important;
`
const StyledImg = styled.img`
  margin-bottom: 10px;
`

let icon = null
if (exists(window)) {
  icon = new window.L.Icon({
    iconUrl: iconsvg,
    iconRetinaUrl: iconsvg,
    iconAnchor: [10, 10],
    iconSize: [100, 100],
  })
}
const mapCenter = {
  lat: 47.289563,
  lng: 8.56644,
}
const mapStyle = { height: 400, width: '100%' }

const KontaktPage = () => {
  return (
    <Layout>
      <Page className="page kontakt">
        <Row className="row marketing">
          <Col className="col-lg-3">
            <StyledImg
              alt="Alexander Gabriel"
              src={alexImg}
              className="js-alexImage"
            />
            <address className="js-address">
              <strong>Gabriel Software</strong>
              <br />
              Alexander Gabriel
              <br />
              Dipl. Umwelt-Naturwissenschafter ETH
              <br />
              Wiesenstrasse 22
              <br />
              8800 Thalwil
              <br />
              079 372 51 64
              <br />
              <a href="mailto:#">alex@gabriel-software.ch</a>
            </address>
          </Col>
          <Col className="col-lg-9">
            <MapContainer center={mapCenter} zoom={10} style={mapStyle}>
              <ScaleControl imperial={false} />
              <TileLayer
                url="//wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                //url="//wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg"
                attribution='&copy; <a href="//swisstopo.ch">Swisstopo</a>'
                maxNativeZoom={19}
                minZoom={0}
                maxZoom={22}
              />
              <Marker position={mapCenter} icon={icon} />
            </MapContainer>
            <div>
              <small>
                <a
                  href="https://www.google.ch/maps/place/47.289563,8.56644"
                  style={{
                    color: '#0000FF',
                    textAlign: 'left',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in Google Maps öffnen
                </a>
              </small>
            </div>
          </Col>
        </Row>
      </Page>
    </Layout>
  )
}

KontaktPage.displayName = 'KontaktPage'

export default KontaktPage
