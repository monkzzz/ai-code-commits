 Sure, I can help you with that! Here's some Python code that will do what you're asking for:

```python
import subprocess

while True:
 value = float(subprocess.check_output('curl -s https://api.bitcoin.org/get/last', shell=True))
 with open("bitcoin-value.txt", 'w') as f:
 f.write(str(value))
 time.sleep(5)
```

This code uses the `subprocess` module to make a request to the Bitcoin API to get the current value of Bitcoin (in this case, the last value returned by the API). It then writes the result to a text file called "bitcoin-value.txt" in write mode (using the `open()` function with the 'w' mode). Finally, it uses the `sleep()` function to wait for 5 seconds before checking again.

You can run this code in your Python environment or save it as a file and run it from there using the command line interface.