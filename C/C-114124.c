 Sure, I can help you with that! Here's some sample code in C that will do what you're asking for:

```c
#include <stdio.h>

int main() {
 int value = 10; // initialize the value of Bitcoin to 10

 // open a text file and write the value inside it
 ifstream input("bitcoin.txt", ios::app);
 char buffer[128];
 getline(input, buffer);
 input.close();

 printf("The current value of Bitcoin is: %d\n", value);
 return 0;
}
```

This code initializes the value of Bitcoin to 10 and then opens a text file called "bitcoin.txt" (assuming it exists in the same directory as the program). It then reads the contents of the file into a string variable using `getline()`, which returns a null-terminated character array. Finally, it prints out the current value of Bitcoin to the console using `printf`.

I hope this helps! Let me know if you have any questions or need further assistance.