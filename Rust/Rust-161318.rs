 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;
use std::io::{File, FileWriter};

let filename = "bitcoin.txt";
let mut file_writer = FileWriter::new(filename);
file_writer.write("0"); // initialize the value to 0

while true do
 {
 let current_value = get_the_current_value_of_bitcoin();
 file_writer.write(&current_value).unwrap();
 }
```

This code uses the `fs` library to create a new file called "bitcoin.txt" and write the initial value of 0 into it. Then, it uses a `while` loop to check if the current value of bitcoin is equal to the value written into the text file. If it is, the program will exit.

To use this code, you'll need to have Rust installed on your computer and be able to run it from the command line using the `rustup` tool.