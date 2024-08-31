 Sure, I can help you with that! Here's some TypeScript code that will do what you need it to do:

```
// Define the interval for checking Bitcoin's current value
let INTERVAL = 5000; // 5 seconds

// Check if the value of Bitcoin has changed since the last check
function checkBitcoin() {
 let bitcoind = require('bitcointransport');
 let bitcoin = new bitcoind.BTC();
 let currentValue = bitcoin.getSupply();
 let lastCheck = Date.now();
 
 // Check if Bitcoin's value has changed since the last check
 if (Math.abs(currentValue - lastCheck) > INTERVAL / 1000) {
 console.log('Bitcoin's value has changed!');
 saveToFile("bitcoind.json"); // Save the current value to a text file named "bitcoind.json"
 } else {
 console.log('Nothing to see here.');
 }
}

// Load the Bitcoin data from a text file
function loadFromFile(fileName) {
 let f = require('fs');
 let data = fs.readFileSync(fileName, 'utf8');
 return JSON.parse(data).bitcoind; // Parse the JSON data into a BTC object
}
```

This code uses the `require()` function to load the Bitcoin transport module from a text file named "bitcointransport.js". You'll need to do this same step for any other files you want to use in your program. 

The `checkBitcoin()` function checks if Bitcoin's value has changed since the last check by comparing the current value with the last check. If it has, it logs a message and saves the new value to a text file named "bitcoind.json". Otherwise, it logs nothing.

Finally, the `loadFromFile()` function takes a JSON-formatted string as input and returns the parsed Bitcoin object. You can use this function to load data from any other files you want to use in your program.