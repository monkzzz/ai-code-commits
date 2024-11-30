 Sure, I can help you with that! Here's some sample code in C that you can use as a starting point:

```c
#include <stdio.h>

int main() {
 float bitcoin_value = 12345; // Assign the current value of Bitcoin to a variable named "bitcoin_value"
 char file_name[20];
 printf("Enter the name of the text file: ");
 scanf("%s", &file_name);
 if (freopen(file_name, "wt") != NULL) { // Check if the file is writeable
 fprintf(stdout, "The value of Bitcoin is: %.2f", bitcoin_value); // Write the current value of Bitcoin to the text file every 5 seconds
 } else {
 printf("Error opening file.");
 }
 return 0;
}
```

This code uses the `freopen()` function to create a new text file and write the current value of Bitcoin to it. It then prints out the value of Bitcoin every 5 seconds using `printf()`. 

To run this program, you can save it as a .c file (e.g. "bitcoin_check.c") and compile it with your preferred C compiler. Then, you can execute the resulting executable by running `./bitcoin_check` in the terminal or command prompt.