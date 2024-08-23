 Sure, I can help you with that! Here's some TypeScript code that will do what you need it to do:

```
// Define the URL for the Bitcoin API
const BITCOIN_URL = 'https://api.bitcoinapp.com/v0';

// Define a function to get the current value of Bitcoin in USD
function getBitcoinValue(): string {
 const response = fetch(BITCOIN_URL + '/getvalue');
 if (response.ok) {
 return await response.json();
 } else {
 console.error('Failed to retrieve Bitcoin data');
 }
}

// Define a function to write the current value of Bitcoin in USD to a text file
function saveBitcoinValue(value: string): void {
 const fileName = 'bitcoin-values.txt';
 fs.writeFileSync(fileName, `${value}`);
}

// Check if the value of Bitcoin has changed every 5 seconds and write it to a text file
function checkBitcoinValue(): boolean {
 let lastChangeTime = null;
 const interval = setInterval(() => {
 const currentTime = new Date().getTime();
 if (currentTime - lastChangeTime >= 3000) { // Check every 5 seconds
 lastChangeTime = currentTime;
 saveBitcoinValue('${getBitcoinValue()}');
 }
 }, 1000);
 return true;
}

// Start the checker function and call it every 5 seconds
checkBitcoinValue();
```

This code defines two functions: `getBitcoinValue` to get the current value of Bitcoin in USD, and `saveBitcoinValue` to write the current value to a text file. It also defines a third function `checkBitcoinValue` to check if the value has changed every 5 seconds and write it to a text file.

The `setInterval` function is used to call the `checkBitcoinValue` function every 5 seconds, with a delay of 1 second between each call. The `saveBitcoinValue` function takes a string as input and writes it to a text file named "bitcoin-values.txt".

I hope this helps! Let me know if you have any questions or need further assistance.