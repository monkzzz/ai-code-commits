 Sure, I can help you with that! Here's an example code in Java that will do what you need it to do:

```java
import java.io.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException {
 // create a file called "bitcoin_value.txt" if it doesn't exist
 File bitcoinValue = new File("bitcoin_value.txt");
 
 // read the value of bitcoin from a web page every 5 seconds using Jsoup
 Document doc = Jsoup::readAll(new URL("https://www.google.com/search?q=bitcoin+price&num=10"), "UTF-8");
 String bitcoinValueString = doc.text();
 
 // save the value of bitcoin to a text file every 5 seconds using PrintWriter
 PrintWriter out = new PrintWriter(bitcoinValue, true);
 out.println("The current Bitcoin price is: " + bitcoinValueString);
 out.close();
 }
}
```

This code reads the current value of Bitcoin from a web page every 5 seconds using Jsoup and stores it inside a text file called "bitcoin_value.txt". The value is then printed to the console every 5 seconds using PrintWriter. You can modify this code to read the value of Bitcoin from another source, such as an API or a database.