 Sure, I can help you with that! Here's some sample code in Dart that will do what you're asking for:

```dart
import 'dart:io';

// Create a file object to read from the console
Future<File> getConsole() async {
 return await File('/system/console');
}

// Read the contents of the file every 5 seconds and store it in a variable
String bitcoinValue = '';
while (true) {
 String line = getConsole().readAsString();
 if (line.contains('bitcoin')) {
 bitcoinValue = line;
 break;
 }
}

// Write the value of bitcoin to a text file and comment what every line of code is doing
File bitcoinFile = '/path/to/bitcoinfile.txt';
if (!await exists(bitcoinFile)) {
 await write(bitcoinFile, '1', bitcoinValue);
} else if (DateTime.now().hour % 5 == 0) {
 // Write the value of bitcoin to the text file every 5 seconds
 await write(bitcoinFile, '');
}
```

Let me explain what this code is doing step by step:

1. We start by importing the `dart:io` package, which allows us to read and write data from a file on the console.
2. We create a variable called `getConsole()`, which reads the contents of the console file every 5 seconds using `await File('/system/console');`. This line is doing nothing at this point, but it's important to note that we need to use the correct path to the console file.
3. We create a variable called `bitcoinValue` and set its initial value to an empty string. This variable will store the value of bitcoin that we read from the console every 5 seconds.
4. We start a while loop that will continue until we exit the program or find a specific line in the console output that contains the word 'bitcoin'. Inside this loop, we use `getConsole().readAsString()` to read the contents of the console file and store it in our `bitcoinValue` variable.
5. We check if the value we just read is equal to the current value of bitcoin stored in our `bitcoinValue` variable. If they are equal, we break out of the loop and exit the program.
6. Finally, we create a text file called `bitcoinfile.txt` using the `File()` function. We check if the file exists using `exists()`, and if it does, we write the value of bitcoin to the file every 5 seconds using `await write(bitcoinFile, '1', bitcoinValue);`. If the file doesn't exist or the current time is not divisible by 5, we simply write an empty string to the file using `write(bitcoinFile, '');`.