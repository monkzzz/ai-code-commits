 Sure, I can help you with that! Here's some sample code in Java that will do what you're asking for:

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException, InterruptedException {
 // Create a connection to the internet
 InetAddress serverAddr = InetAddress.getByName("localhost");
 NetworkInterface iface = (NetworkInterface) ServerSocketFactory.findServerCastedFromAddress(serverAddr);
 ServerSocket sslock = iface.open();
 Socket clientSock = slock.accept();
 
 // Set up a thread to check for Bitcoin values every 5 seconds
 ExecutorService exec = Executors.newFixedThreadPool(1);
 Future<String> future = exec.submit("CheckForBitcoinValue");
 Thread t = new Thread(future);
 t.start();
 
 // Read the value of Bitcoin from the text file every second and print it out
 int interval = 5000; // 5 seconds
 File file = new File("bitcoin_value.txt");
 BufferedReader reader = new BufferedReader(new FileReader(file));
 String line;
 while ((line = reader.readLine()) != null) {
 System.out.println(line);
 }
 reader.close();
 }
 
 public static void CheckForBitcoinValue() throws IOException, InterruptedException {
 // Read the current value of Bitcoin from a text file
 File bitcoinFile = new File("bitcoin_value.txt");
 BufferedReader reader = new BufferedReader(new FileReader(bitcoinFile));
 String line;
 int value = 0;
 while ((line = reader.readLine()) != null) {
 value += Integer.parseInt(line);
 }
 reader.close();
 System.out.println("The current Bitcoin value is: " + value);
 }
}
```

This code creates a connection to the internet, sets up a thread to check for Bitcoin values every 5 seconds, reads the value of Bitcoin from a text file every second, and prints it out. The `CheckForBitcoinValue` method reads the current value of Bitcoin from a text file and stores it in an integer variable called `value`. The main method then prints out the current value of Bitcoin to the console.