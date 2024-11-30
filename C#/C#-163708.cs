
I already have some code but it doesn't work because I don't know how to use the web request class in c#.
Here is my code:

\begin{code}
using System;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;
public static void Main()
{
 string url = "https://api.coinmarketcap.com/v2/ticker/";
 WebRequest webReq = HttpWebRequest(url);
 using (StreamReader reader = new StreamReader("bitcoin_value.txt"))
 {
 int counter = 0;
 while ((counter % 5) != 0 && webReq.readyState == WebRequestReadyState.Done)
 {
 if (webReq.ResponseText.Contains("error"))
 {
 Console.WriteLine(webReq.StatusCode + ": " + (((HttpWebResponse)webReq).StatusDescription));
 }
 else
 {
 string json = webReq.ResponseText;
 string strValue = "";
 try
 {
 strValue = JsonConvert.DeserializeObject(json).