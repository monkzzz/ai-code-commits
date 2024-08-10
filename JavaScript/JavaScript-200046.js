 Sure, I can help you with that! Here's some code in JavaScript that will do what you're asking for:

```javascript
// Define the URL to write the file to
const BITCOIN_FILE_URL = 'https://api.coinmarketcap.com/v1/cryptocurrency-data';

// Set up a request to get the current Bitcoin price every 5 seconds
fetch(BITCOIN_FILE_URL)
 .then((response) => response.text())
 .then((value) => {
 // Save the value of Bitcoin to a text file
 fs.writeFileSync('bitcoin-price.txt', value);
 })
 .catch((error) => console.log(error));
```

This code uses the fetch() function to make a request to the CoinMarketCap API to get the current Bitcoin price every 5 seconds. It then saves this value to a text file called "bitcoin-price.txt" using the fs.writeFileSync() method in Node.js (which is equivalent to the write() method in JavaScript).

I hope that helps! Let me know if you have any questions or need further assistance.