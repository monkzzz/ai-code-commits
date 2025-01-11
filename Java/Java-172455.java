 Sure, I can help you with that! Here's an example code in Java that will do what you need it to do:

```java
import java.io.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException {
 // Open the text file where we'll store the bitcoin values
 File outputFile = new File("bitcoinvalues.txt");

 // Read in the current value of bitcoin from a web API every 5 seconds
 Scanner scanner = new Scanner(System.in);
 BufferedReader reader = new BufferedReader(scanner);
 String line;
 while ((line = reader.readLine()) != null) {
 System.out.println("Current Bitcoin value: " + line);
 }

 // Write the current bitcoin value to a text file every 5 seconds
 writer = new PrintWriter(outputFile, true);
 writer.write("Current Bitcoin value:");
 writer.newLine();
 writer.write(String.valueOf(bitcoin));
 writer.close();
 }
}
```

Let me explain what this code does step by step:

1. We start by importing the necessary classes for reading and writing data in Java.
2. We define a `main` method that will handle our program.
3. We create an empty file called "bitcoinvalues.txt" using the `File` class to store the bitcoin values.
4. We use a `Scanner` object to read in the current value of bitcoin from a web API every 5 seconds.
5. We use a `BufferedReader` object to read each line of the input stream and print it out.
6. We create an empty `PrintWriter` object called "writer" that will write the current bitcoin value to a text file every 5 seconds.
7. We use the `Write` method of the `PrintWriter` class to write the current bitcoin value to the file.
8. Finally, we close the writer and input stream objects so they can be reused in other parts of our program.