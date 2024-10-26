 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;
use std::io::{File, FileWriter};

let filename = "bitcoin.txt";
let writer = FileWriter::new(filename);
writer.write_str("0"); // Write the initial value to the file

for _ <- 5 * 60 { // Check bitcoin every 5 seconds
 let value = get_value(); // Get the current Bitcoin value
 if value > 1000000 { // If it's greater than $1 million, write a message to the file
 writer.write_str(format!("{:x}", value));
 } else { // Otherwise, do nothing
 }
}

let file = File::open(filename, FileRandomAccess); // Open the file for writing
file.write(writer.buffer().as_ptr()); // Write the entire buffer to the file
```

This code first creates a `FileWriter` object with the filename "bitcoin.txt". Then it writes the initial value of Bitcoin (in this case, 0) to the file. After that, it uses a loop to check the value of Bitcoin every 5 seconds and write a message to the file if the value is greater than $1 million. If not, it does nothing.

I hope this helps! Let me know if you have any questions or need further assistance.