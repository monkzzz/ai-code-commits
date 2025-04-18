 Sure, I can help you with that! Here's an example code that will do what you need it to do:

```javascript
// Define the URL for the API endpoint that returns the current Bitcoin value
const url = 'https://api.coinmarketcap.com/v1/cryptocurrency/bitcoin';

// Use fetch() to retrieve the JSON data from the API endpoint
fetch(url)
 .then(response => response.json())
 .then(data => {
 // Convert the JSON data into a string and write it to a file
 fs.writeFileSync('bitcoin-value.txt', data);
 
 // Define a function that checks whether or not Bitcoin is worth more than $10,000 today
 const now = new Date();
 const bitcoinToday = Math.abs(now.getTime() - data['timestamp']);
 if (bitcoinToday > 10000) {
 console.log('Bitcoin is worth more than $10,000 today!');
 } else {
 console.log('Bitcoin is not worth over $10,000 today.');
 }
 })
 .catch(error => {
 console.error(error);
 });
```

This code uses the fetch() function to retrieve JSON data from the API endpoint that returns the current Bitcoin value. It then converts this JSON data into a string and writes it to a file called "bitcoin-value.txt". 

Next, we define a function that checks whether or not Bitcoin is worth more than $10,000 today. We do this by calculating the difference between the current time (`now`) and the timestamp for the Bitcoin data (`data['timestamp']`). If this difference is greater than 10,000, we consider it to be true and log a message saying so.

Finally, if there's an error with the fetch() or any other function, we catch it and log an error message.