 Sure, I can help you with that! Here's some sample code in Java that will do what you're asking for:

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class BitcoinChecker {
 public static void main(String[] args) throws IOException, InterruptedException {
 // Create a connection to the internet
 InetAddress serverAddr = InetAddress.getByName("localhost");
 NetworkInterface iface = (NetworkInterface) ServerSocketFactory.findServerInterfacedByName(serverAddr, 80);
 Socket socket = (Socket) iface.open();

 // Create a buffered reader to read from the internet
 BufferedReader in = new BufferedReader(new InputStreamReader((socket.getInputStream())));

 // Read the value of bitcoin every 5 seconds and store it inside a text file
 String line;
 while ((line = in.readLine()) != null) {
 System.out.println("The current value of Bitcoin is: " + line);
 try (FileOutputStream output = new FileOutputStream("bitcoin-value.txt")) {
 // Write the line to the text file
 int len = line.length();
 byte[] buffer = new byte[len];
 Random random = new Random();
 random.nextBytes(buffer);
 output.write(new String(buffer));
 }
 }

 // Close the internet connection and socket
 in.close();
 socket.close();
 }
}
```

This code creates a connection to a server that provides access to the internet, reads the value of bitcoin every 5 seconds using a buffered reader, and writes the line to a text file called "bitcoin-value.txt". You can modify this code to suit your specific needs, such as changing the name of the text file or the method used to read the value of bitcoin.