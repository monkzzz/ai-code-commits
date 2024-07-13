I want to use the command line to execute the code.
Here is my code:

\begin{code}
import requests
from bs4 import BeautifulSoup
import time

url = 'https://www.bitstamp.net/api/'
headers = {
'akismet': '',
'user-key': ''
}

while True:
 response = requests.get(url, headers=headers)
 soup = BeautifulSoup(response.text,'html.parser')
 data = soup.find('div', {'class':'ticker_data'})
 value = data.find('span', {'class':'last'}).text
 print("The current value of bitcoin is: " + str(value))
 time.sleep(5)
\end{code}

But when I execute it on the command line, it gives me this error:

\begin{code}
Traceback (most recent call last):
File "/Users/alexandru/Desktop/Python/bitcoin_value.py", line 10, in <module>
 data = soup.find('div', {'class':'ticker_data'