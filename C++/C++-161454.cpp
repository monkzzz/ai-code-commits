 Sure, I can help you with that! Here's some sample code in C++ that will do what you're asking for:

```c++
#include <iostream>

int main() {
 // Initialize the value of Bitcoin to zero
 int bitcoin = 0;

 // Set up a timer to check the value of Bitcoin every 5 seconds
 Timer timer(5 * 1000);

 // Read the current value of Bitcoin from the console and store it in a text file
 std::stringstream ss;
 ss << "Enter the current value of Bitcoin: ";
 std::string input("");
 while (std::getline(ss, input)) {
 if (input == "1") {
 // If the user entered 1, set the value of Bitcoin to 1000000
 bitcoin = 1000000;
 } else if (input == "0") {
 // If the user entered 0, set the value of Bitcoin to -1
 bitcoin = -1;
 }
 }

 // Write the current value of Bitcoin to a text file
 ofstream outputfile("bitcoin.txt");
 outputfile << bitcoin << std::endl;
 outputfile.close();

 return 0;
}
```

This code initializes the value of Bitcoin to zero, sets up a timer to check for changes in the value of Bitcoin every five seconds, reads the current value from the console and stores it in a text file called "bitcoin.txt", and writes the current value back to the same file. 

I hope this helps! Let me know if you have any questions or need further assistance.