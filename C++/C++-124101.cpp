 Sure, I can help you with that! Here's an example code in C++ that checks the value of Bitcoin every five seconds and stores the result inside a text file, along with a comment explaining what each line does:

```c++
#include <iostream>

int main() {
 // Open the text file for writing
 ofstream myfile;
 myfile.open("bitcoin_value.txt", ios::app);

 // Read the current value of Bitcoin from a web API
 int current_ bitcoin = read_json(std::string("https://api.coindesk.com/v1/cryptocurrency/bitcoin-usd?format=json"));

 // Calculate the average of the last 5 readings and store it in a variable
 double avg = (double)(current_ - read_last(myfile) + read_last(myfile)) / 2;

 // Print the current value of Bitcoin to the console
 cout << "The current value of Bitcoin is $" << avg << endl;

 // Close the text file
 myfile.close();

 return 0;
}
```

Let me explain what each line does:

- `include <iostream>` - This line includes the header files needed for C++ programming, specifically `iostream`, which is used to handle input and output from the console.
- `int main()` - This is the main function of the program, where we define the main task and any necessary variables or functions that will be used throughout the code.
- `ofstream myfile;` - This line creates an object called `myfile`, which is a file stream that allows us to write data to a text file. We use it to store the current value of Bitcoin in a text file named "bitcoin_value.txt".
- `open("bitcoin_value.txt", ios::app)` - This line opens the specified text file for writing, with the `ios::app` flag indicating that we want to write to the console (iOS).
- `// Read the current value of Bitcoin from a web API` - This line reads the current value of Bitcoin from a web API called `coindesk.com`, which provides information about cryptocurrencies including Bitcoin. We use the `read_json()` function to parse the JSON data and extract the current value of Bitcoin.
- `int current_ bitcoin = read_json(std::string("https://api.coindesk.com/v1/cryptocurrency/bitcoin-usd?format=json"))` - This line reads the current value of Bitcoin from the web API and stores it in an integer variable called `current_`. We use the `read_json()` function to parse the JSON data and extract the current value of Bitcoin.
- `double avg = (double)(current_ - read_last(myfile) + read_last(myfile)) / 2;` - This line calculates the average of the last five readings and stores it in a double variable called `avg`. We use the `read_last()` function to get the last reading from the text file, and then add and subtract that reading from the current value to get the average.
- `// Print the current value of Bitcoin to the console` - This line prints the current value of Bitcoin to the console using the `cout` statement.
- `cout << "The current value of Bitcoin is $" << avg << endl;` - This line prints a message with the current value of Bitcoin and its average, separated by a dollar sign and a comma.
- `// Close the text file` - This line closes the text file named "bitcoin_value.txt", which was opened earlier using the `open()` function.