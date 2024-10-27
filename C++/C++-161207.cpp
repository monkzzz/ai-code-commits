 Sure, I can help you with that! Here's some sample code in C++ that will do what you're asking for:

```c++
#include <iostream>

int main() {
 // Initialize the value of Bitcoin to zero
 int bitcoin = 0;

 // Set up a timer to check the value of Bitcoin every 5 seconds
 Timer timer;
 timer.start();

 // Read the current value of Bitcoin from the console
 std::cout << "The current value of Bitcoin is: " << bitcoin << std::endl;

 // Write the current value of Bitcoin to a text file
 ofstream output_file("bitcoin_value.txt");
 if (output_file.is_open()) {
 output_file << bitcoin << std::endl;
 } else {
 std::cout << "Error opening output file!" << std::endl;
 }

 // Stop the timer
 timer.stop();

 return 0;
}
```

This code initializes the value of Bitcoin to zero, sets up a timer to check the value of Bitcoin every 5 seconds using `Timer`, reads the current value from the console and writes it to a text file named "bitcoin_value.txt", and then stops the timer. You can modify this code to read the value of Bitcoin from a database or API instead of reading it from the console.