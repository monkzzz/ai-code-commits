
I've found some code on GitHub but it doesn't work for me, here it is:

```rust
extern crate hyper;
use std::io::Write;
use std::thread;
use hyper::Client;
fn main() {
 let client = Client::new();
 let url = "https://api.coingecko.com/api/v3/coins/bitcoin/markets";
 let mut response = client.get(url).send().unwrap();
 let mut output = String::new();
 response.read_to_string(&mut output).unwrap();
 let data = serde_json::from_str(&output);
 let price = data["data"]["price"].as_f64;
 let file = "prices.txt".with_extension("");
 {
 let mut file = File::create(file).expect("Failed to create file!");
 // Write the value of bitcoin every 5 seconds
 thread::sleep(Duration::from_millis(1000));
 if price != last_price {
 writeln!(mut file, "Price: {}", price)?;
 last