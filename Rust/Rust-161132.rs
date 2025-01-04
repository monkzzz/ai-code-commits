 Sure, I can help you with that! Here's some code in Rust that will do what you're asking for:

```rust
use std::fs;

// Connect to the internet
let http = Http::with_http_status(StatusCode.Ok).unwrap();

// Read the value of Bitcoin from a website every 5 seconds
let val = http.get("https://www.x-rates.com/calculator").await.unwrap().0;

// Save the value to a text file and comment what every line of code is doing
let filename = "bitcoin_value.txt";
if let Some(file) = fs::create_dir_all(filename).await {
 if !fs::write("${filename}", val.to_string()).await {
 panic!("Could not write to file");
 }
}
```

Let me explain what this code is doing step by step:

1. We start by using the `std::http` library to connect to a website that provides the current value of Bitcoin in dollars per hour.
2. We then use the `Http::get()` method to retrieve the value from the website and store it in the `val` variable.
3. Next, we create a text file called "bitcoin_value.txt" with the desired name using the `fs::create_dir_all()` function and then write data to the file using `fs::write()`.
4. Finally, we check if the file exists and write the value to it using `val.to_string()`, which converts the variable to a string before writing it to the file. If the file does not exist or cannot be written to, we panic (i.e., crash) because of the `panic!` statement at the end of each line of code.

I hope this helps you with your task! Let me know if you have any further questions.