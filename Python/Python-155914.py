 Sure, I can help you with that! Here's some Python code that will do what you're asking for:

```python
import subprocess

while True:
 value = float(subprocess.check_output('curl -s https://api.bitpay.com/v1/get-price | jq '"${.}"'))
 with open("bitcoin_value.txt", "w") as f:
 f.write(str(value))
 time.sleep(5)
```

This code uses the `subprocess` module to make a request to the Bitcoin API, which returns the current value of Bitcoin in real-time. It then stores this value inside a text file called "bitcoin_value.txt" using the `open()` and `write()` functions. Finally, it waits for 5 seconds before checking again.

You can save this code to your Python environment or create a new script with the same name and run it from the command line.