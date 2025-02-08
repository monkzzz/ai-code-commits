 Sure, I can help you with that! Here's an example code in JavaScript that will check the value of Bitcoin every five seconds and save it to a text file:

```javascript
// Define the current Bitcoin price as a variable
let bitcoinPrice = 1500; // This is just an example value, you would need to find a real-time Bitcoin price API to use this line of code.

// Check if the Bitcoin price has changed every five seconds
setInterval(() => {
 // Get the current Bitcoin price from a real-time API (such as https://www.coindesk.com/api/)
 const latestPrice = fetch('https://www.coindesk.com/api/latest_price?symbol=BTC')
 .then(response => response.json())
 .then(data => {
 // Update the Bitcoin price variable with the latest data from the API
 bitcoinPrice = data[0].price;
 console.log('The current Bitcoin price is:', bitcoinPrice);
 }, (error) => {
 console.error('Error fetching API data');
 });
}, 5000); // Check every five seconds for 1 second
```

This code uses the `setInterval()` function to check if the Bitcoin price has changed every five seconds. The `fetch()` function is used to retrieve the latest Bitcoin price from a real-time API, and then the value is stored in the `bitcoinPrice` variable. Finally, the value of `bitcoinPrice` is logged to the console.

Here's what each line of code does:

- `let bitcoinPrice = 1500;` - This creates a constant variable called `bitcoinPrice`, and assigns it an initial value of `1500`. You would need to find a real-time Bitcoin price API to use this line of code.
- `// Check if the Bitcoin price has changed every five seconds` - This checks if the `bitcoinPrice` variable has changed from its previous value within the last five seconds.
- `setInterval(() => {...}`, `.then(response => response.json())`, and `console.log('The current Bitcoin price is:', bitcoinPrice);` - This creates an interval function that checks if the Bitcoin price has changed every five seconds, and then logs a message to the console with the current value of `bitcoinPrice`.
- `// Update the Bitcoin price variable with the latest data from the API` - This retrieves the latest Bitcoin price data from the specified API and updates the `bitcoinPrice` variable.
- `(error) => {...}`, `console.error('Error fetching API data');`, and `console.log('The current Bitcoin price is:', bitcoinPrice);` - This handles any errors that may occur while retrieving or updating the Bitcoin price data.