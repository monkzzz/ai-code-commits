 Sure, I can help you with that! Here's an example code in TypeScript that checks the value of Bitcoin every five seconds and stores the result in a text file:

```
// Import the FileWatcher module
import 'file-watcher';

// Define a function to check the value of Bitcoin
function checkBitcoin(): void {
 // Create a watcher for the 'bitcoind' file
 let watcher = new FileWatcher();
 
 // Check if the file has changed every five seconds
 watcher.onChanged((fileName: string) => {
 // Get the current value of Bitcoin from the file
 const bitcoin = fs.readFileSync(fileName, 'utf-8');
 
 // Log the result to the console
 console.log('The current value of Bitcoin is:', bitcoin);
 });
}
```

This code uses the FileWatcher module to create a watcher for the 'bitcoind' file. Every five seconds, it checks if the file has changed and logs the result to the console. If the file changes, it reads the value of Bitcoin from the file using fs.readFileSync() and returns the result.