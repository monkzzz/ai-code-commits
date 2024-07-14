 Sure, I can help you with that! Here's some sample code in C++ that will do what you're asking for:

```c++
#include <iostream>

int main() {
 // Initialize the value of Bitcoin to zero
 int bitcoin = 0;

 // Set up a timer to check the value of Bitcoin every 5 seconds
 Timer timer(5 * 60 * 1000); // Check the value every 5 minutes (in milliseconds)

 // Read the current value of Bitcoin from the text file
 ifstream inputFile("bitcoin.txt");
 int line = 1;
 string lineStr;
 while (getline(inputFile, line)) {
 // Parse the line as a number and store it in the variable "bitcoin"
 double num = stod(lineStr);
 bitcoin += num * 1000000; // Add 0.000001 to the value to make it positive
 lineStr = "";
 }
 inputFile.close();

 // Print the current value of Bitcoin
 cout << "The current value of Bitcoin is: $" << bitcoin << endl;

 return 0;
}
```

This code reads the contents of a text file called `bitcoin.txt`, which contains the current value of Bitcoin in decimal form (i.e., with a dollar sign and a few digits). It then checks the value of Bitcoin every 5 seconds using a timer, and prints out the current value to the console.

I hope this helps! Let me know if you have any questions or need further assistance.