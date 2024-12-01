 Sure, I can help you with that! Here's an example code in TypeScript that checks the value of Bitcoin every five seconds and stores the result in a text file:

```
// Import the FileWatcher module
import 'file-watcher';

// Define a function to check the value of Bitcoin
function checkBitcoin(): void {
 // Create a watch for the current directory
 let watcher = new FileWatcher();
 
 // Check every five seconds
 watcher.onFileChanged(() => {
 const bitcoin = parseInt((new URLSearchParams('https://www.bitstamp.net/api/latest?format=json')).json());
 if (bitcoin > 100) {
 console.log("The value of Bitcoin is: " + bitcoin);
 // Save the result to a text file named "check_bitcoin.txt"
 let output = fs.writeFileSync('check_bitcoin.txt', `${bitcoin}`);
 } else {
 console.log("Bitcoin is less than or equal to 100.");
 // Do nothing here, since the value of Bitcoin is already known
 }
 });
}
```

Let me explain what's happening in this code:
- We start by importing the FileWatcher module, which allows us to watch files for changes.
- Next, we define a function called `checkBitcoin()`. This function checks whether the value of Bitcoin is greater than 100 (which is the current maximum allowed). If it is, we log a message to the console and save the result to a text file named "check_bitcoin.txt".
- We use the `URLSearchParams` object to retrieve the latest Bitcoin data from the BitStamp API in JSON format.
- We parse the JSON data using the `json()` method, which converts it into a JavaScript object that we can work with.
- Finally, we check whether the value of Bitcoin is greater than 100 and log a message if it is. Otherwise, we do nothing and let the console message indicate that the value of Bitcoin is less than or equal to 100.