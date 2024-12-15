 Sure, I can help you with that! Here's an example code that will do what you need it to do:

```javascript
// Define the URL for the API endpoint that returns the current Bitcoin value
const url = 'https://api.coinmarketcap.com/v1/cryptocurrency/bitcoin';

// Use fetch() to retrieve the JSON data from the API endpoint
fetch(url)
 .then(response => response.json())
 .then(data => {
 // Convert the JSON data into a string so we can store it in a file
 const jsonString = JSON.stringify(data);
 fs.writeFileSync('bitcoin-value.txt', jsonString);
 })
 .catch(error => console.log(error));
```

This code uses the fetch() function to retrieve data from the API endpoint for the Bitcoin value. It then converts this JSON data into a string using the JSON.stringify() method and writes it to a file called "bitcoin-value.txt". You can modify the URL in the first line of code to point to your own API endpoint that returns the Bitcoin value you want to store.

I hope this helps! Let me know if you have any questions or need further assistance.