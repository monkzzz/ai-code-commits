 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;
use std::io::{File, FileWriter};

let filename = "bitcoin.txt";
let mut file = File::open(filename, FileRandomAccess);
if let Ok((value, error)) = file.write("{}", json!({"address": "0x1234567890abcdef0".to_string()})) {
 println!("The value of Bitcoin is: {}", value);
} else if err != nil {
 println!("Error writing to file: `{}`", err.description());
} else {
 println!("File already exists.");
}
```

This code uses the `fs` library to create a new file called "bitcoin.txt" and open it for reading/writing. It then checks if the value of Bitcoin is stored in the file using a JSON object with an address as the key. If the value is found, it prints out the value and exits. If there's an error writing to the file or the file already exists, it prints an error message.

You can replace the `json!` function with your own JSON parsing library if you prefer.