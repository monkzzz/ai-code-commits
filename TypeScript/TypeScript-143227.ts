 Sure, I can help you with that! Here's some TypeScript code that will do what you need it to do:

```
// Define the interval for checking Bitcoin's current value
let INTERVAL = 5000; // 5 seconds

// Check if the value of Bitcoin has changed since the last check
function checkValue(): void {
 let lastCheckedValue = JSON.parse(localStorage.getItem('lastCheckedValue'));
 let currentValue = getCurrentBitcoin();

 if (currentValue !== lastCheckedValue) {
 saveToFile("bitcoin-value", currentValue); // Save the new value to a file
 localStorage.setItem('lastCheckedValue', JSON.stringify(currentValue)); // Update the stored value in local storage
 }
}

// Get the current Bitcoin value from the web page
function getCurrentBitcoin(): any {
 let script = document.querySelector("script");
 let textContent = script.textContent;
 return JSON.parse(textContent); // Parse the text content into a JavaScript object
}

// Save the current Bitcoin value to a file
function saveToFile(fileName, value): void {
 let fileObject = new File([value], fileName + '.json');
 fileObject.writeUTF(); // Write the JSON data to the file
}
```

This code defines an interval for checking the Bitcoin's current value every 5 seconds using `JSON.parse(localStorage.getItem('lastCheckedValue'))`. It then checks if the value has changed since the last check, saves the new value to a text file and updates the stored value in local storage.

To use this code, you can add it as a script tag to your HTML file or create a `<script>` tag in your TypeScript file and include it there. Then, call the `checkValue()` function every 5 seconds using JavaScript to check if the Bitcoin's value has changed since the last check.