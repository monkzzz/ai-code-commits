 Sure, I can help you with that! Here's some sample code in Dart that checks the value of Bitcoin every five seconds:

```dart
import 'dart:async';

void main(string argument) {
 final asynchronous = Async.current;

 async run() {
 while (true) {
 // Check if the current price of Bitcoin is greater than $100,000
 final price = await getBTCPrice();
 if (price > 100000 && !asynchronous.isCancellationPending) {
 print("The current Bitcoin price is: $" + price);
 } else {
 // If the price is not greater than $100,000 or there's a cancellation, exit the loop
 asynchronous.cancel();
 }
 await asynchronous.sleep(5000); // Check Bitcoin every five seconds
 }
 }
}
```

This code uses the `getBTCPrice()` function to check the current price of Bitcoin, and the `sleep()` method to wait for five seconds before checking again. You can replace the `getBTCPrice()` function with your own code that returns the current Bitcoin price.