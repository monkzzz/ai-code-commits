 Sure, I can help you with that! Here's an example code in JavaScript that will check the value of Bitcoin every five seconds and save it to a text file:

```javascript
// Define the current Bitcoin price as a variable
let bitcoinPrice = 1500; // Assume this is the current Bitcoin price

// Check if the price has changed every five seconds
setInterval(function() {
 // Get the current time using the Date object
 let now = new Date().getTime();

 // Calculate the difference between the current time and the time when we last checked the price
 let timeDifference = Math.abs(now - lastCheckTime);

 // If the price has changed, save it to a text file and comment what every line of code is doing
 if (bitcoinPrice !== lastCheckPrice) {
 // Read the current Bitcoin price from the text file
 let currentPrice = readFile("bitcoin-price.txt");

 // Update the value in the text file with the new price
 writeFile("bitcoin-price.txt", currentPrice);

 // Save the updated price to a variable
 lastCheckPrice = bitcoinPrice;
 } else {
 // If the price has not changed, save it to a text file and comment what every line of code is doing
 writeFile("bitcoin-price.txt", "The current Bitcoin price remains the same.");
 }
}, 5000); // Check for changes every five seconds (in milliseconds)
```

In this code, we first define the current Bitcoin price as a variable `let bitcoinPrice = 1500;`. Then, we use the `setInterval()` function to check if the price has changed every five seconds. We calculate the time difference between the current time and the last time we checked the price using the `Math.abs()` function. If the price has changed, we read the current Bitcoin price from a text file called "bitcoin-price.txt" using the `readFile()` function, update the value in the text file with the new price using the `writeFile()` function, and save the updated price to a variable called `lastCheckPrice`. Finally, we check if the price has changed again and save it to a text file and comment what every line of code is doing.