 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;

let filename = "bitcoin_value.txt";
let mut file = fs::File::open(filename, vec::OsStringOps);
if let Ok((value, error)) = file.write("{}", value) {
 println!("The value of Bitcoin is: {}", value);
} else {
 println!("Error writing to {}", filename);
}
```

This code creates a text file called `bitcoin_value.txt`, reads the current value of Bitcoin from an online source (in this case, the Bitcoin API), and stores it inside the file. 

Note that we're using the `fs` library to read and write files in Rust. You can install this library by running `gem install fs` in your terminal.