 Sure, I can help you with that! Here's some code in JavaScript that will check the value of Bitcoin every five seconds:

```javascript
let bitcoins = 1500; // Set the initial value to 1500 bitcoins
setInterval(() => {
 let currentBitcoin = bitcoins; // Get the current value and store it in a variable called "currentBitcoin"
 document.getElementById("bitcoin").innerHTML = currentBitcoin; // Display the current Bitcoin value on the webpage
 bitcoins = currentBitcoin; // Update the initial value to the new value of Bitcoin
}, 5000); // Set the interval time in milliseconds (5 seconds)
```

This code sets a variable called `bitcoins` to the initial value of 1500 bitcoins. Then, it uses the `setInterval` function