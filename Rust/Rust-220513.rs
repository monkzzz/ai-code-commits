 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;
use std::io::{File, FileWriter};

let filename = "bitcoin.txt";
let mut file_writer = FileWriter::new(filename);
file_writer.write("0"); // initialize the value to 0

while true do
 {
 let current_value = get_current_bitcoin_value();
 file_writer.write(&current_value).unwrap();
 }
```

This code first creates a `FileWriter` object for the specified file name, and then uses a while loop to keep reading the value of Bitcoin until it reaches 0. It then writes this value to the file using the `write()` method. You can modify the `get_current_bitcoin_value()` function to read the current value of Bitcoin from an API or other source, and then call the `write()` method with the appropriate value.

I hope that helps! Let me know if you have any questions.