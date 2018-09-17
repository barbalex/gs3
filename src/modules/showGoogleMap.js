export default function () {
  const options = {
    zoom: 19,
    // Gebäude zentral stellen
    center: new window.google.maps.LatLng(47.283746, 8.563820),
    streetViewControl: false,
    rotateControl: false,
    overviewMapControl: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: true,
    mapTypeId: window.google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      // Gelände nicht anzeigen
      mapTypeIds: [
        window.google.maps.MapTypeId.ROADMAP,
        window.google.maps.MapTypeId.SATELLITE,
        window.google.maps.MapTypeId.HYBRID
      ]
    }
  }
  window.map = new window.google.maps.Map(document.getElementById('google_karten_div'), options)
  const marker = new window.google.maps.Marker({ // eslint-disable-line no-unused-vars
    position: new window.google.maps.LatLng(47.283873, 8.563963),
    map: window.map
  })
}
