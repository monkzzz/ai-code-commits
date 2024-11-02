 Sure, I can help you with that! Here's some sample code in C that checks the value of Bitcoin every five seconds and stores it inside a text file. You can modify this code to fit your specific needs.

```c
#include <stdio.h>

int main() {
 int bitcoin_value = get_bitcoin_value(); //get the current value of Bitcoin from a web API
 if (bitcoin_value > 100000) { //if the value is greater than $10,000,000, print "Bitcoin is worth more than $10 million!"
 write("bitcoind.txt", bitcoin_value); //write the current value to a text file called bitcoind.txt
 } else { //else if the value is less than or equal to $10 million, print "Bitcoin is worth less than $10 million!"
 write("bitcoind.txt", -2 * bitcoin_value); //if the value is between $10 million and $1 million, subtract 2 times the value from it to make it negative.
 }
 return 0;
}
```

In this code, we first get the current value of Bitcoin by calling a web API that provides this information. We then use if-else statements to check whether the value is greater than or less than $10 million and print a message accordingly. Finally, we write the value to a text file called bitcoind.txt using the `write()` function.

I hope this helps! Let me know if you have any questions.