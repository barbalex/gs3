import React, { Component } from 'react'
import styled from 'styled-components'

import prepareGoogleMap from '../modules/prepareGoogleMap'
import alexImg from '../images/alex.jpg'
import Layout from '../components/layout'

const StyledImg = styled.img`
  margin-bottom: 10px;
`

class KontaktPage extends Component {
  componentDidMount() {
    prepareGoogleMap()
  }

  render() {
    return (
      <Layout>
        <div id="kontakt" className="page kontakt">
          <div className="row marketing">
            <div className="col-lg-3">
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
            </div>
            <div className="col-lg-9">
              <div
                id="google_karte"
                style={{
                  width: '100%',
                  height: 370,
                  position: 'relative',
                }}
              >
                <div
                  id="google_karten_div"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
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
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

KontaktPage.displayName = 'KontaktPage'

export default KontaktPage
