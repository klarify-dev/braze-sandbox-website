// initialize the SDK
braze.initialize("32b1c062-986c-419a-a353-0e9c64da1f85", {
  baseUrl: "sdk.fra-01.braze.eu",
});

// optionally show all in-app messages without custom handling
braze.automaticallyShowInAppMessages();

// if you use Content Cards
braze.subscribeToContentCardsUpdates(function (cards) {
  // cards have been updated
});

// Be sure to call `openSession` after `automaticallyShowInAppMessages`
braze.openSession();

/* Logic to retrieve location, and store in Braze */
function stooreLocationInBraze(position) {
  var coords = position.coords;
  braze
    .getUser()
    .setLastKnownLocation(
      coords.latitude,
      coords.longitude,
      coords.accuracy,
      coords.altitude,
      coords.altitudeAccuracy
    );
}
// using the default JS method to retrieve location
navigator.geolocation.getCurrentPosition(stooreLocationInBraze);

setTimeout(() => {
  braze.refreshFeatureFlags();
  const featureFlag = braze.getFeatureFlag("texas_banner");
  braze.logFeatureFlagImpression("texas_banner");
  if (featureFlag?.enabled) {
    
    const el = document.querySelector('#texas_banner');
    el.classList.remove("hidden");

  } else {
    alert("not eligible");
  }
}, 4000);

/* Logic to retrieve content and display, we'll only pick the most recent more than one exists */
let cards = braze.getCachedContentCards();
// let firstCard = cards.card[0];
// let image = firstCard.imageUrl;
// let url = firstCard.url;
// let description = firstCard.description;
// let title = firstCard.title;
