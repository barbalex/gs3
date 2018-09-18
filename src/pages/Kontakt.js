import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import 'bootstrap/dist/css/bootstrap.min.css'

import alexImg from '../images/alex.jpg'
import Layout from '../components/layout'

const Page = styled.div`
  padding: 15px;
  /* Hinweise von Google ausblenden, überschneiden mit dem Ziehsymbol */
  .gm-style-cc {
    display: none;
  }
`
const Row = styled.div``
const Col = styled.div`
  /* side spacing for mobile first views */
  padding: 15px;
`
const StyledImg = styled.img`
  margin-bottom: 10px;
  padding-right: 15px;
`

const mapCenter = {
  lat: 47.283746,
  lng: 8.56382,
}
const bootstrapURLKeys = {
  key: 'AIzaSyDqE11-ME0QlbB34g_p9lyr6FrwrYPE3y0',
}
const mapDivStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 40,
  height: 40,
  left: -40 / 2,
  top: -40 / 2,
  border: '5px solid red',
  borderRadius: 40,
  backgroundColor: 'rgba(0,0,0,0)',
  padding: 4,
}

function createMapOptions(maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.LEFT_BOTTOM,
      style: maps.ZoomControlStyle.SMALL,
    },
    mapTypeControl: true,
    mapTypeId: maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.TOP_LEFT,
      mapTypeIds: [
        maps.MapTypeId.ROADMAP,
        maps.MapTypeId.SATELLITE,
        maps.MapTypeId.HYBRID,
      ],
    },
  }
}

const KontaktPage = () => (
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
          <div style={{ height: 400, width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={bootstrapURLKeys}
              defaultCenter={mapCenter}
              defaultZoom={19}
              options={createMapOptions}
            >
              <div
                lat={47.283746}
                lng={8.56382}
                text={'Gabriel Software'}
                style={mapDivStyle}
              />
            </GoogleMapReact>
          </div>
          <div>
            <small>
              <a
                href="https://www.google.ch/maps/place/47%C2%B017'01.9%22N+8%C2%B033'50.1%22E/@47.2838532,8.5632326,172m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d47.283852!4d8.56393"
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

KontaktPage.displayName = 'KontaktPage'

export default KontaktPage
