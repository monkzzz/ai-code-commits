 Sure, I can help you with that! Here's some sample code in C# that checks the value of Bitcoin every five seconds:

```c
#include <winsock2.h>

int main()
{
 WSADATA wsaData;
 if (!WSAStartup(MAKEWORD(1, 0), &wsaData))
 {
 printf("Error: Could not start Winsock\n");
 return 1;
 }

 SOCKET sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
 if (sock == INVALID_SOCKET)
 {
 printf("Error: Could not create socket\n");
 WSACleanup();
 return 1;
 }

 char buffer[] = "GET / HTTP://BITCOIN.com HTTP/1.0";
