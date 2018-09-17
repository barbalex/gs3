import showGoogleMap from '../modules/showGoogleMap'

window.showGoogleMap = showGoogleMap

export default function() {
  if (window.google && window.google.maps) {
    showGoogleMap()
  } else {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    // load google maps api script then show the map
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDqE11-ME0QlbB34g_p9lyr6FrwrYPE3y0&callback=showGoogleMap'
    document.body.appendChild(script)
  }
}
