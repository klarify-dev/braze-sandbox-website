// initialize the SDK
braze.initialize('32b1c062-986c-419a-a353-0e9c64da1f85', {
    baseUrl: "sdk.fra-01.braze.eu"
});

// optionally show all in-app messages without custom handling
braze.automaticallyShowInAppMessages();

// if you use Content Cards
braze.subscribeToContentCardsUpdates(function(cards){
    // cards have been updated
});

// Be sure to call `openSession` after `automaticallyShowInAppMessages`
braze.openSession();