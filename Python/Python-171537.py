 Sure, I can help you with that! Here's some sample code in Python that will do what you're asking for:

```python
import subprocess

start_time = time()

while True:
 # Check the value of Bitcoin every 5 seconds
 if int(subprocess.check_output('bitcoin-qt -server', shell=True)):
 print("Bitcoin is currently worth", str(int(subprocess.check_output('bitcoin-qt -server', shell=True))), end="")
 # Save the value of Bitcoin to a text file
 with open('bitcoin_value.txt', 'w') as f:
 f.write("{}\n".format(str(int(subprocess.check_output('bitcoin-qt -server', shell=True)))))
 # Comment every line of code
```

Let me explain what this code is doing step by step:

1. We start a `while` loop that will continue until we're done checking the value of Bitcoin every 5 seconds.
2. Inside the loop, we use the `subprocess` module to check the value of Bitcoin using the command "bitcoin-qt -server". This command returns the current value of Bitcoin in a string format. We then print this string to the console and save it to a text file called `bitcoin_value.txt`.
3. Finally, we comment every line of code with an empty line. 

I hope that helps! Let me know if you have any questions or need further assistance.