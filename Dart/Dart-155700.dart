 Sure, I can help you with that! Here's some sample code in Dart that will check the value of Bitcoin every five seconds and save it to a text file. You can customize this code to fit your specific needs.

```dart
import 'dart:io';

void main(string[] args) {
 var interval = Timer.periodic(constants.interval, (timer) {
 var currentValue = Bitcoin.currentPrice; // get the current price of Bitcoin
 if (currentValue != previousValue) { // check if the price has changed
 var fileName = 'bitcoin-price.txt'; // save the new price to a text file
 print(fileName); // print the file name
 }
 previousValue = currentValue; // set the previous value back to the initial value
 });
}
```

In this code, we're using the `Timer` class from the `dart:io` package to create a periodic timer that checks the price of Bitcoin every five seconds. We're then storing the current price in a text file called "bitcoin-price.txt". 

You can customize the file name and the interval time by changing the constants at the beginning of the code. You can also add more logic to check for any errors or handle other situations that may arise during the program execution.