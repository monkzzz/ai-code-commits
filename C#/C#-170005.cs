 Sure, I can help you with that! Here's an example code in C# that checks the value of Bitcoin every five seconds and stores it in a text file:

```csharp
#include('startup.h');

int main() {
 // Initialize the global variable to keep track of the current Bitcoin price
 int bitcoinPrice = 0;

 // Start a timer that checks the Bitcoin price every five seconds
 Timer beginTimer(CLOCKS_PER_SEC);

 // Check if the Bitcoin price has changed since the last time it was checked
 while (bitcoinPrice != getBitcoin()) {
 // Get the current Bitcoin price from the API
 bitcointo int bitcoin = BitConvert::fromWei(getBitcointo());
 
 // Update the global variable with the new Bitcoin price
 bitcoinPrice = bitcoin;

 // Check if the Bitcoin price has changed since the last time it was checked
 if (bitcoin != getBitcoin()) {
 cout << "The current Bitcoin price is: $" << setprecision(2) << bitcoin << endl;
 }
 }

 // Stop the timer and print the current Bitcoin price
 beginTimerEnd();
 cout << "The current Bitcoin price is: $" << setprecision(2) << bitcoinPrice << endl;
 
 return 0;
}
```

This code uses the `getBitcointo()` function to get the current Bitcoin price from the API, and the `setBitcoin()` function to update the global variable with the new value. The `Timer` class is used to check for changes in the Bitcoin price every five seconds using the `CLOCKS_PER_SEC` constant.

I hope this helps! Let me know if you have any questions or need further assistance.