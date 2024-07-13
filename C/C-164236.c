 Sure, I can help you with that! Here's some sample code in C that checks the value of Bitcoin every five seconds:

```c
#include <winsock2.h>

int main()
{
 WSADATA wsaData; // Initialize Winsock
 SOCKET sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP); // Create a TCP socket
 char buffer[10]=""; // Define a string to store the current Bitcoin value
 struct timeval tv; // Define a timer variable
 
 if (connect(sock, (SOCKADDR*)&wsaData, sizeof(wsaData)) != 0) // Connect to the server
 {
 printf("Error: Could not connect to Winsock!\n");
 return 1;
 }
 
 WSASend(sock