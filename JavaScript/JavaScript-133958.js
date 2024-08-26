 Sure, I can help you with that! Here's some code in JavaScript that will do what you're asking for:

```javascript
// Define the URL to write the file to
const url = 'https://api.bitpay.com/v1/balance';

// Use fetch to get the latest balance data every 5 seconds
fetch(url)
 .then(response => response.json())
 .then(data => {
 // Save the current balance value to a text file
 fs.writeFile('bitcoin-balance.txt', JSON.stringify(data, null, ' '));
 })
 .catch(error => console.log(error));
```

This code uses the fetch() function to get the latest balance data from the Bitpay API every 5 seconds. It then converts the response into a JSON object and writes it to a text file called "bitcoin-balance.txt" using the fs library in Node.js. You can modify this code to save the current balance value to a different text file or to a database if you prefer.

I hope that helps! Let me know if you have any questions.