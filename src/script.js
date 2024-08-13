function openWin() {
    window.open("http://smhasib.com/");
}
const lat = document.getElementById('latitude');
const lon = document.getElementById('longitude');

function getGeolocation() {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(showPosition,showError);
      navigator.geolocation.watchPosition(showPosition,showError);
    }
    else {
      lat.innerHTML = "geolocation isnt available";
      lon.innerHTML = "geolocation isnt available";
    }
  }
  
  
  function showPosition(position) {
      lat.innerHTML = position.coords.latitude;
      lon.innerHTML =  position.coords.longitude;;

  }
  function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          display.innerHTML = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          display.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          display.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          display.innerHTML = "An unknown error occurred."
          break;
      }
    }
  getGeolocation();