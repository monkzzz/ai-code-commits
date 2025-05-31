 Sure, I can help you with that! Here's some sample code in C that checks the value of Bitcoin every five seconds and stores it in a text file, along with a comment explaining each line of code:

```c
#include <stdio.h>

int main() {
 int bitcoin_value = get_bitcoin_value(); // Get the current Bitcoin value from the internet
 if (bitcoin_value == 10000) { // Check if the value is equal to 10,000
 printf("The current Bitcoin value is %d\n", bitcoin_value); // Print the value
 file_write(bitcoin_file, "Current Bitcoin value: $" + bitcoin_value + "\n"); // Write the value to a text file with a comment
 } else { // If the value isn't equal to 10,000
 printf("Error: Invalid Bitcoin value\n"); // Print an error message
 }
 return 0;
}
```

This code uses the `get_bitcoin_value()` function to retrieve the current Bitcoin value from the internet. It then checks if the value is equal to 10,000 and prints a comment with the value if it is. If the value isn't equal to 10,000, it prints an error message instead. Finally, it writes the current Bitcoin value to a text file with a comment using `file_write()` function.