async function getGeoLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
          resolve({ latitude, longitude });
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              console.error('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              console.error('The request to get user location timed out.');
              break;
            default:
              console.error('An unknown error occurred.');
              break;
          }
          reject(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

// Usage of the async function
async function getLocation() {
  try {
    const location = await getGeoLocation();
    // Do something with the location
    console.log('Location:', location);
  } catch (error) {
    // Handle errors
    console.error('Error getting location:', error);
  }
}

// Call the function to get the user's location
getLocation();
