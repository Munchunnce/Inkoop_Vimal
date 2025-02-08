function generateSequence() {
    const inputField = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    
    // Get the entered value and convert it to an integer.
    const num = parseInt(inputField.value, 10);
  
    // If input is not a number, or negative, display appropriate message.
    if (isNaN(num)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
    
    if (num < 0) {
      resultDiv.textContent = "Enter a positive value.";
      return;
    }
    
    // Determine if the number is even or odd.
    let sequence = [];
    
    // For both even and odd, the next 3 numbers are found by adding 2 each time.
    // For example, if even (e.g., 24), the next even numbers: 26, 28, 30.
    // If odd (e.g., 25), the next odd numbers: 27, 29, 31.
    sequence.push(num + 2, num + 4, num + 6);
    
    // Output the result
    resultDiv.textContent = "Output: " + sequence.join(", ");
  }
  