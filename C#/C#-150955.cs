 Sure, I can help you with that! Here's an example code in C# that checks the value of Bitcoin every five seconds and stores it in a text file:

```csharp
#include('stdlib.h');

int main() {
 // Initialize the system clock
 clock_t start =clock();
 
 // Read the current time from the system clock
 time_t now = clock(start);
 
 // Get the current date and time in a human-readable format
 char buff[20];
 gettimeofday(&now, NULL);
 strftime("%Y-%m-%d %H:%M:%S", &buff);
 std::cout << "Current Date and Time: " << buff << std::endl;
 
 // Check the value of Bitcoin every five seconds
 if (Bitcoin() > 100) {
 // Store the current value of Bitcoin in a text file
 ofstream myfile("bitcoin.txt");
 myfile << Bitcoin() << endl;
 } else {
 std::cout << "Bitcoin is less than or equal to $100!" << std::endl;
 }
 
 return 0;
}
```

This code uses the `time` and `gettimeofday` functions from the `<time.h>` header file to get the current time. It then checks if Bitcoin is greater than $100, which will trigger the code to store the value in a text file called "bitcoin.txt". Finally, it prints a message indicating whether or not Bitcoin is less than or equal to $100.

I hope this helps! Let me know if you have any questions.