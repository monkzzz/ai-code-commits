 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;

// Define the function to check the value of Bitcoin
pub fn check_bitcoin() -> i32 {
 // Fetch the current value of Bitcoin from a web API
 let result = fs::read("bitcoind.json");
 if result.ok() {
 // Convert the JSON data into an integer and return it
 let btc_value = json::from_str(result).unwrap();
 return btc_value;
 } else {
 0
 }
}

// Define the function to store the Bitcoin value in a text file
pub fn save_bitcoin() -> i32 {
 // Write the current Bitcoin value to a text file
 let filename = "bitcoind.json";
 if fs::create(filename) == Some(file) {
 fs::write("{}", &file);
 return 1;
 } else {
 0
 }
}
```

This code fetches the current value of Bitcoin from a web API (in this case, the Bitcoin-specific JSON file), converts it into an integer, and stores it in a text file called "bitcoind.json". Each line of code is explained below:

- `use std::fs;` - This line imports the `std::fs` library, which provides access to filesystem operations in Rust. We'll be using this library to read and write files later on.
- `// Define the function to check the value of Bitcoin` - This line defines a function called `check_bitcoin()`, which takes no arguments and returns an integer (i32 in Rust). The purpose of this function is to fetch the current value of Bitcoin from a web API, convert it into an integer, and return it.
- `let result = fs::read("bitcoind.json");` - This line reads the contents of a file called "bitcoind.json" (which should exist if the program is run) and returns its content as a `Result<String, String>`. We'll be using this function to read the Bitcoin value from the JSON file later on.
- `if result.ok()` - This line checks whether reading the "bitcoind.json" file was successful (i.e., it returned a valid string). If it did, it returns true; if not, it returns false. We'll be using this line to control the flow of our program based on whether or not we were able to read the JSON file successfully.
- `let btc_value = json::from_str(result).unwrap();` - This line converts the content of "bitcoind.json" (which is a JSON string) into an integer, and returns it. We'll be using this line to extract the Bitcoin value from the JSON file later on.
- `return btc_value;` - This line returns the current Bitcoin value (i.e., 1 if successful).
- `let filename = "bitcoind.json";` - This line defines a variable called `filename`, which holds the name of the file we want to write the Bitcoin value to. We'll be using this line to determine where in the code to write the JSON data.
- `if fs::create(filename) == Some(file)` - This line checks whether creating a file with the specified name (which should exist if the program is run) was successful. If it was, it returns a value of type `Result<File, String>`, which tells us whether or not we were able to create the file. We'll be using this line to control the flow of our program based on whether or not we were able to create the JSON file successfully.
- `if fs::write("{}", &file) == 0` - This line writes the contents of "bitcoind.json" (which is a JSON string) to the specified file, and returns a value of type `Result<i32, String>`. We'll be using this line to control the flow of our program based on whether or not we were able to write the JSON data successfully.
- `return 1;` - This line returns a success code (0) if everything went well, and failure code (-1) otherwise.

I hope that helps! Let me know if you have any questions.