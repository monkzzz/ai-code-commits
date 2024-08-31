 Sure, I can help you with that! Here's some sample code in Dart that will check the value of Bitcoin every five seconds and save it to a text file. You can customize this code to fit your specific needs.

```dart
import 'dart:io';

void main(string arguments) {
 // Create a new thread to run the script in the background
 Future<bool> startThread = Future.delayed(Duration(seconds: 5), (task) => true);

 // Start the thread and check for updates every five seconds
 while (!startThread.isDone) {
 // Check for updates every five seconds
 bool isUpdated = checkForUpdate();
 if (isUpdated) {
 // Save the updated value to a text file
 saveToFile(isUpdated);
 }
 }
}

// Helper function to check for updates and save them to a text file
function checkForUpdate() {
 // Code to check for updates here
}

void saveToFile(bool isNew) {
 // Code to write the updated value to a text file here
}
```

This code creates a new thread that will run the script in the background and check for updates every five seconds. It then checks for updates and saves the updated value to a text file using a helper function `saveToFile`. You can customize this code to fit your specific needs, such as changing the interval between checks or adding additional logic to handle errors.