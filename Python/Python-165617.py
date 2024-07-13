 Sure, I can help you with that! Here's some Python code that will check the value of Bitcoin every five seconds:

```python
import time

while True:
 # Check the current Bitcoin price here
 print("The current Bitcoin price is:", Coin.get_value())
 time.sleep(5)
```

In this code, we use a `time` module to schedule a function (the `print` statement) every five seconds using the `sleep()` method. The `while` loop continues to run as long as the program is not stopped by pressing any key or hitting Ctrl+C. 

You can modify this code to check for other cryptocurrencies or update it with your own Bitcoin price calculation function.