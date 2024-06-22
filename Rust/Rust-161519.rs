 I already searched how to get the data from an API but I don't know how to make it run every 5 seconds without using threads or async/await functions because they are not allowed in this task.

Could anyone provide a basic example with code how can be something like:
```rust
use std::thread;
fn main() {
 let url = "https://api.coinmarketcap.com/v1/ticker/?convert=True";
 let mut response = get(url);
 
 if let Ok(mut json) = response.json() {
 let price_usd = json["ticker"]["price_usd"].as_str().unwrap();
 println!("Price of Bitcoin: ${}", price_usd);
 } else {
 println!("Error: Couldn't parse JSON")
 }
 thread::sleep(Duration::from_secs(5));
}
fn get(url: &str) -> Result<String, std::io::Error> {
 use hyper::client;
 let mut request = client::Request::new(Method::Get, url);
 request.headers_mut().set("Accept-Encoding",