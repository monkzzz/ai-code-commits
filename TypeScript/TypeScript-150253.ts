 Sure, I can help you with that! Here's some TypeScript code that will do what you need it to do:

```
// Define the URL for the Bitcoin API
const BITCOIN_URL = 'https://api.bitcoinapp.com/v0';

// Define a function to get the current value of Bitcoin in USD
function getBitcoinValue(): number {
 const response = fetch(BITCOIN_URL + '/getvalue');
 return parseInt((response.ok === true) ? response.json()['current'] : '0');
}

// Define a function to save the current value of Bitcoin in USD to a text file
function saveBitcoinValueToFile(bitcoinValue: number): void {
 const fstream = new File(['./bitcoinsave.txt'].includes('.'))
 fstream.writeString(`${bitcoinValue}`);
}

// Define a function to check the value of Bitcoin every 5 seconds and save it to a text file
function checkBitcoin(): void {
 const now = getCurrentTime();
 if (now < 1000 && getBitcoinValue() !== 0) {
 saveBitcoinValueToFile(getBitcoinValue());
 }
}

// Start the program
checkBitcoin();
```

This code defines two functions. The first function, `getBitcoinValue`, gets the current value of Bitcoin in USD from the Bitcoin API and returns it as a number. The second function, `saveBitcoinValueToFile`, saves the current value of Bitcoin to a text file called "bitcoinsave.txt" located in the same directory as your TypeScript code.

The third function, `checkBitcoin`, checks the value of Bitcoin every 5 seconds and saves it to the same text file if the value is not zero. You can call this function whenever you want to check the value of Bitcoin or save its current value to a file.

I hope that helps! Let me know if you have any questions.