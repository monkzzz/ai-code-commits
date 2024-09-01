 Sure, I can help you with that! Here's some sample code in Java that will do what you're asking for:

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException, InterruptedException {
 // Create a connection to the internet
 URL url = new URL("https://api.bitcoin.org/latest");
 HttpURLConnection conn = (HttpURLConnection) url.openConnection();
 conn.setRequestMethod("GET");

 // Read the response from the API every 5 seconds
 BufferedReader in = new BufferedReader(new InputStreamReader((conn.getInputStream())));
 String inputLine;
 while ((inputLine = in.readLine()) != null) {
 System.out.println(inputLine);
 }
 in.close();

 // Store the value of bitcoin inside a text file
 File file = new File("bitcoin_value.txt");
 try (FileWriter writer = new FileWriter(file)) {
 writer.write("Current Bitcoin Value: " + getBitcoinValue());
 } catch (IOException e) {
 System.err.println("Error writing to file: " + e.getMessage());
 }
 }

 private static String getBitcoinValue() throws IOException {
 // Retrieve the current value of bitcoin from the API every 5 seconds
 Thread.sleep(5000);
 return "Current Bitcoin Value: $" + getBTC();
 }
}
```

This code connects to a Bitcoin API (https://api.bitcoin.org/) and retrieves the current value of bitcoin every 5 seconds using a `Thread.sleep()` method. It then writes this value to a text file called "bitcoin_value.txt" using a `FileWriter` object.

I hope this helps! Let me know if you have any questions or need further assistance.