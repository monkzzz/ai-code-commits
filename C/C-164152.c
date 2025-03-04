 Sure, I can help you with that! Here's some sample code in C that will do what you're asking for:

```c
#include <stdio.h>

int main() {
 int value = 10; // initialize the value of Bitcoin to 10

 // open a text file and write the value inside it
 ifstream input("bitcoin.txt", ios::app);
 input.close();

 // read the value from the text file every 5 seconds
 timer_t start = clock();
 while (input) {
 string line;
 getline(input, line);
 int Bitcoin = stoi(line);
 if (Bitcoin >= value) {
 printf("The current value of Bitcoin is %d\n", Bitcoin);
 } else {
 printf("Invalid Bitcoin value\n");
 }
 input.close();
 sleep(5000); // check the value every 5 seconds
 }
 return 0;
}
```

Let me explain what this code does step by step:

1. We start by initializing the value of Bitcoin to 10, which you've mentioned in your task. This line sets the starting point for our calculation.
2. We create an input file called "bitcoin.txt" using the ios::app I/O stream device. This file will store the current value of Bitcoin we read every five seconds.
3. We use a timer to start reading from the input file every 5 seconds, and we keep looping until the input file is closed.
4. Inside the loop, we read each line of the input file into a string variable called "line". We then convert this line into an integer using the stoi() function, which converts a string to an integer. If the Bitcoin value is greater than or equal to our starting value (10), we print it out and exit the loop. Otherwise, we print an error message.
5. Finally, we sleep for 5 seconds using the sleep() function, which pauses the program for that amount of time. We repeat this process every five seconds until the input file is closed or we reach our starting value.