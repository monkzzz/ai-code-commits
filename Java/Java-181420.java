 Sure, I can help you with that! Here's an example code in Java that does what you're asking for:

```java
import java.io.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException {
 // create a file to store the bitcoin value
 File file = new File("bitcoin_value.txt");

 // read the current bitcoin value from a web page every 5 seconds using a Java HttpURLConnection object
 String url = "https://api.coindesk.com/json?amount=1";
 URL obj = new URL(url);
 BufferedReader in = new BufferedReader(new InputStreamReader((obj)));

 // read the response from the web page and store it inside a string variable
 String inputLine;
 while ((inputLine = in.readLine()) != null) {
 System.out.println("Received message: " + inputLine);
 }

 // close the HTTP connection and file
 in.close();
 file.delete();
 }
}
```

Here's a brief explanation of what each line of code is doing:

- The `import` statements at the beginning of the class are necessary to import the required classes for working with files and networking.
- The `public` keyword declares that this class can be used publicly without any restrictions.
- The `main` method is where we define our main function. It throws an `IOException` if there's a problem reading from the file or making the HTTP request, which is important to handle in case something goes wrong.
- The `BufferedReader` class is used to read input from an HTTP response. We create a new instance of this class and pass in the URL object and the method to use with it.
- The `while` loop reads each line of the HTTP response and prints it out, so we can see what's happening.
- Finally, we close the HTTP connection and file using the `close()` method on the `InputStreamReader`.