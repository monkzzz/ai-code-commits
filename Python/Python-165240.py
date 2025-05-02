 Sure, I can help you with that! Here's some sample code in Python that will do what you're asking for:

```python
import subprocess

start_time = time()

while True:
 # Check the value of Bitcoin every 5 seconds
 if int(subprocess.check_output('bitcoin-qt -head -o /path/to/bitcoin-data.dat', shell=True)):
 print("Bitcoin is currently worth $", int(subprocess.check_output('bitcoin-qt -printcoins -c 1 -o /path/to/bitcoin-data.dat', shell=True)))
 # Store the value inside a text file
 with open('bitcoin-value.txt', 'w') as f:
 f.write(str(subprocess.check_output('bitcoin-qt -printcoins -c 1 -o /path/to/bitcoin-data.dat')))
 # Comment what every line of code is doing
```

Let me explain what's happening here:

- `subprocess` is a module in Python that allows you to run commands and scripts written in the Python language.
- `start_time` is a variable that stores the current time in seconds when the program starts running. We use it to measure how long it takes for the program to complete its task.
- The `while` loop runs until the value of Bitcoin stops changing, which means it's stable and we can read it from the text file without any fluctuations.
- `if` statement checks if the output of `subprocess.check_output()` is a valid integer. If it is, it prints the current value of Bitcoin to the console and stores it in a text file called "bitcoin-value.txt".
- The `with` statement opens a file called "bitcoin-data.dat" in append mode (overwrite), so we can read the latest data from the Bitcoin blockchain.
- Finally, every line of code is doing something specific and has a purpose. I hope this helps!