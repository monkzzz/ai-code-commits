 Sure, I can help you with that! Here's some Python code that will do what you're asking for:

```python
import subprocess

while True:
 # Check if the value of Bitcoin is greater than or equal to $10000
 btc_value = float(subprocess.check_output('gotbitcoins', shell=True))
 if btc_value >= 10000:
 print("Bitcoin is worth more than $10,000!")
 with open('bitcoin_value.txt', 'w') as f:
 f.write(str(btc_value))
 else:
 print("Bitcoin is not currently worth over $10,000.")
```

This code uses the `subprocess` module to check the value of Bitcoin every 5 seconds using the `gotbitcoins` command. It then prints a message if the value is greater than or equal to $10000 and stores the value in a text file called "bitcoin_value.txt" with the format `<timestamp>`. If the value is not currently worth over $10,000, it prints a different message.

You can run this code by saving it as a Python script (`.py`) and running it in your terminal or command prompt using the command `python filename.py`. Then, you'll need to create a text file called "bitcoin_value.txt" somewhere on your computer with the format `<timestamp>`, where the `<timestamp>` is the timestamp of when the value was checked and stored in the file.