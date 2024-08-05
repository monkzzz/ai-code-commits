 Sure, I can help you with that! Here's some TypeScript code that will do what you need it to do:

```
// Define the URL for the Bitcoin API
const BITCOIN_URL = 'https://api.bitcoin.org/v1';

// Define a function to get the current Bitcoin price in USD
function getBitcoinPrice(timeout) {
 // Create a request to the Bitcoin API and send it every 5 seconds
 setTimeout(() => {
 const response = fetch(BITCOIN_URL + '/latest/price?timestamp=' + new Date().getTime());
 const jsonResponse = await response.json();
 return jsonResponse.latestPrice;
 }, timeout);
}

// Define a function to save the Bitcoin price to a text file
function saveBitcoinToFile(bitcoinPrice) {
 // Open a new text file in write mode
 const fs = require('fs');
 fs.writeFileSync('bitcoin-price.txt', `${bitcoinPrice} USD`);
}
```

This code defines two functions: `getBitcoinPrice(timeout)` and `saveBitcoinToFile(bitcoinPrice)`. The first function sends a request to the Bitcoin API every 5 seconds using `setTimeout()`, retrieves the latest price in USD, converts it from Bitcoin to USD (using `fetch()`), parses the JSON response using `await` and returns the result.

The second function saves the current Bitcoin price to a text file called "bitcoin-price.txt" in write mode using `fs.writeFileSync()`. You can replace the value of `bitcoinPrice` with the actual Bitcoin price you want to store in the file.

I hope this helps! Let me know if you have any questions or need further assistance.