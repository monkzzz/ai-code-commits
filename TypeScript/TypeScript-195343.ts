 Sure, I can help you with that! Here's an example code in TypeScript that checks the value of Bitcoin every five seconds and stores the result in a text file:

```
// Import the necessary modules
import './style.css';

// Define the function to check Bitcoin
function checkBitcoin() {
 // Read the current value of Bitcoin from the console
 const bitcoin = readLine();
 
 // Check if the value is greater than or equal to 1
 if (bitcoin >= 0 && bitcoin <= 1) {
 // Write the result to a text file
 writeFile('bitcoin.txt', `${bitcoin}`);
 } else {
 console.log(`Bitcoin is ${bitcoin}.`);
 }
}

// Call the function every five seconds
setInterval(checkBitcoin, 5000);
```

This code reads the current value of Bitcoin from the console and checks if it's greater than or equal to 1. If true, it writes the result to a text file called "bitcoin.txt". You can replace the value in the `writeFile` function with your own desired output filename.

I hope this helps! Let me know if you have any questions.