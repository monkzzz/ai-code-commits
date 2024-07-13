 Sure, I can help you with that! Here's some sample code in C++ that you can use as a starting point:

```c++
#include <iostream>

int main() {
 std::string value = "0"; // initialize the value to 0
 int interval = 5; // set the interval time in seconds
 bool is Bitcoin Available = true; // assume that Bitcoin is available

 // check if Bitcoin is available every 5 seconds
 while (isBitcoinAvailable) {
 std::cout << "The current value of Bitcoin is: " << value << std::endl;
 std::this_thread::sleep_for(interval * 1000); // wait for the interval time to pass
 }

 return 0;
}
```

This code initializes a string variable `value` to the value of 0, sets an interval time of 5 seconds (which should be enough time to check the Bitcoin availability), and assumes that Bitcoin is available. It then checks if Bitcoin is available every 5 seconds using a `while` loop and printing the current value of Bitcoin to the console. Finally, it returns 0 to indicate successful execution.

You can modify this code by changing the values of `interval` and `isBitcoinAvailable`, or by adding additional logic if you want to store the Bitcoin value in a text file instead of just printing it to the console.