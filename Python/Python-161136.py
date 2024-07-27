 Sure, I can help you with that! Here's some Python code that will do what you're asking for:

```python
import subprocess

while True:
 value = float(subprocess.check_output('curl -s https://api.bitquery.com/v1/get-price?symbol=BTC | sed 's/.*:\d+//'', stderr='') or 0)
 with open("bTC.txt", "w") as f:
 f.write(str(value))
 time.sleep(5)
```

This code uses the `subprocess` module to make a request to the Bitquery API, which provides real-time data on the value of Bitcoin (BTC). The output is piped through `sed`, which removes any whitespace from the beginning or end of the string. Finally, the value is written to a text file called "bTC.txt" using the `open` function and the `write` method.

You can run this code in your Python environment (e.g. PyCharm) or save it as a script file (e.g. `check_bitcoin.py`). Then, simply run the script with the command `python check_bitcoin.py` to start checking the value of Bitcoin every 5 seconds and writing its value to a text file.