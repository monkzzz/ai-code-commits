 Sure, I can help you with that! Here's some code in JavaScript that will do what you're asking for:

```javascript
// Define the URL to read from
var url = 'https://api.bitquery.com/v1/';

// Read the content of the text file into an array of strings
var contents = fs.readFileSync(filePath, 'utf8');

// Parse the JSON data from the content
var parsedData = JSON.parse(contents);

// Check if the value of Bitcoin is greater than or equal to 1
if (parsedData.Bitcoin > 0) {
 console.log('Bitcoin is worth more than $0!');
} else {
 console.log('Bitcoin is not worth $0!');
}
```

This code reads the contents of a text file called `filePath`, which contains JSON data about Bitcoin's value, into an array of strings using `fs.readFileSync()`. It then parses this data using `JSON.parse()` and checks if the value of Bitcoin is greater than or equal to 1 (which you specified in your task). If it is, the program will print a message saying that Bitcoin is worth more than $0. If not, it will print another message.

I hope this helps! Let me know if you have any questions.