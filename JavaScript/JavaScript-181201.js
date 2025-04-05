 Sure, I can help you with that! Here's an example code in JavaScript that will check the value of Bitcoin every five seconds and save it to a text file:

```javascript
// Define the current Bitcoin price as a variable
let bitcoinPrice = 1500; // This is just an example value, you would need to find a real-time Bitcoin price API to use this line of code.

// Set up a timer that checks the Bitcoin price every five seconds
setInterval(function() {
 // Get the current Bitcoin price from a real-time API (such as the one used by CoinMarketCap)
 let currentPrice = getBitcoinPrice();
 
 // Save the current Bitcoin price to a text file
 saveToFile("bitcoin_price.txt", "current price: $" + currentPrice);
}, 5000); // Check every five seconds for 30 seconds (5 seconds x 5)
```

Let me explain what's happening here. We start by defining a variable `bitcoinPrice` with an example value of 1500. Then, we set up a timer using the `setInterval()` function. This function checks the Bitcoin price every five seconds and calls a separate function (`getBitcoinPrice()`) to retrieve the current price from a real-time API (such as the one used by CoinMarketCap). The retrieved price is then saved to a text file called `bitcoin_price.txt`, with the current price displayed in quotes ("$" + currentPrice).

I hope this helps! Let me know if you have any questions or need further assistance.