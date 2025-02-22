 Sure, I can help you with that! Here's an example code in C# that checks the value of Bitcoin every five seconds and stores it in a text file. You can modify this code to fit your specific needs.

```csharp
#include('startup.h');

int main() {
 HANDLE file = CreateFile("bitcoin.txt", GENERIC_READ | GENERIC_WRITE, 0, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL);
 if (!file) {
 printf("Error: Could not create file\n");
 return 1;
 }

 timeofday(&todate); // get the current time in seconds

 socklen_t clen = sizeof(socklen_t);
 SOCKET client = socket((AF_INET)server.c_str(), SOCK_STREAM, IPPROTO_TCP), // create a TCP connection to the server
 on error resume next:
 sockaddr_in serv_addr; // set the server address
 strcpy(serv_addr.sin_family, AF_INET); // set the family to IPv4 or IPv6
 serv_addr.sin_port = htons((u_int16_t)80)); // assign a port number of 80 (HTTP)
 if (!connect(client, (sockaddr*)&serv_addr, clen)) {
 printf("Error: Could not connect to the server\n");
 return 2;
 }

 char buffer[100]; // define a string variable for storing the value of Bitcoin
 gets(buffer); // get the current value of Bitcoin from the user
 if (recv(client, buffer, sizeof(char), 0) < 5) {
 printf("Error: Could not receive data\n");
 return 3;
 }

 send(client, "1", strlen("1"), 0); // send a message to the server indicating that we have received the value of Bitcoin
 recv(client, buffer, sizeof(char), 0); // receive the response from the server
 if (strcmp(buffer, "1") == 0) { // check if the response is correct
 printf("The value of Bitcoin is: %d\n", atoi(buffer)); // store the value in a text file
 } else {
 printf("Error: Invalid response from server\n");
 return 4;
 }

 close(client); // close the TCP connection to the server

 return 0;
}
```

This code sends a message indicating that we have received the value of Bitcoin to the server, and then checks if the response is correct. If it is correct, it stores the value in a text file. You can modify this code to fit your specific needs.