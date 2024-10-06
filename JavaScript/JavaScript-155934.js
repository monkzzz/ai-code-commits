 Sure, I can help you with that! Here's some code in JavaScript that will do what you're asking for:

```javascript
// Define the URL to read from
var url = 'https://api.bitquery.com/v1/latest.json?app_id=YOUR_APP_ID&timeout=3000';

// Read the latest Bitcoin price every 5 seconds and store it in a variable
function fetchBitcoin() {
 var xhr = new XMLHttpRequest();
 xhr.open('GET', url, true);
 xhr.onreadystatechange = function() {
 if (xhr.readyState === 4 && xhr.status === 200) {
 // Store the Bitcoin price in a variable
 var bitcoinPrice = JSON.parse(xhr.responseText).price;
 saveToFile('bitcoin-' + new Date().getTime(), 'bitcoin-price.txt');
 }
 };
 xhr.send();
}

// Call the function every 5 seconds to fetch the latest Bitcoin price
setInterval(fetchBitcoin, 5000);
```

This code uses the `XMLHttpRequest` object to make a GET request to the Bitquery API endpoint for the latest Bitcoin price. It then parses the response JSON and stores the value in a variable called `bitcoinPrice`. Finally, it saves the current date and time to a text file called `bitcoin-' + new Date().getTime()` with a .txt extension.

I hope this helps! Let me know if you have any questions or need further assistance.