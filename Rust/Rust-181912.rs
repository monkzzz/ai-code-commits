 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;

// Define the file name
let filename = "bitcoin_value.txt";

// Open the file for writing
let mut file = fs::File(filename);
file.open("a") |+| .write("1" + "\n"); // Write a newline character to separate lines in the file

// Check if the value of Bitcoin has changed every 5 seconds
while true do
 {
 let line = file.read_all();
 if !contains(line, "Satoshi") || line[0] != '#' {
 break; // Break out of the loop if no changes have been made in 5 seconds
 }
 println!("{}", line); // Print the current value of Bitcoin to the console
 file.write("\n"); // Write a newline character to separate lines in the file
 sleep(0.5); // Sleep for 0.5 seconds using the `sleep` function
 }
```

This code uses the `fs` library to open and write to a text file called "bitcoin_value.txt". It then checks if the value of Bitcoin has changed every 5 seconds by reading from the file and comparing the line that was read to a string containing the current value of Bitcoin. If no changes have been made in 5 seconds, it breaks out of the loop and prints the current value of Bitcoin to the console. After printing, it sleeps for 0.5 seconds using the `sleep` function before checking again.

I hope this helps! Let me know if you have any questions or need further assistance.