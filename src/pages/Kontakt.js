import React from 'react'
import styled from 'styled-components'
import { Map, ScaleControl, TileLayer, Marker } from 'react-leaflet'
import 'bootstrap/dist/css/bootstrap.min.css'
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
  lat: 47.283746,
  lng: 8.56382,
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
              Bönirainstrasse 14
              <br />
              8800 Thalwil
              <br />
              079 372 51 64
              <br />
              <a href="mailto:#">alex@gabriel-software.ch</a>
            </address>
          </Col>
          <Col className="col-lg-9">
            {exists(window) && (
              <Map center={mapCenter} zoom={10} style={mapStyle}>
                <ScaleControl imperial={false} />
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapCenter} icon={icon} />
              </Map>
            )}
            <div>
              <small>
                <a
                  href="https://www.google.ch/maps/place/47%C2%B017'01.9%22N+8%C2%B033'50.1%22E/@47.27081,8.5309685,11.83z/data=!4m5!3m4!1s0x0:0x0!8m2!3d47.2838611!4d8.5639167"
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
