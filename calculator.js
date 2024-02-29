function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let operation = prompt("Choose an operation (+, -, *, /):");
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Invalid input for numbers.");
    return;
  }

  switch (operation) {
    case "+":
      alert(`Result: ${num1 + num2}`);
      break;
    case "-":
      alert(`Result: ${num1 - num2}`);
      break;
    case "*":
      alert(`Result: ${num1 * num2}`);
      break;
    case "/":
      if (num2 === 0) {
        alert("Error: Division by zero is not allowed.");
      } else {
        alert(`Result: ${num1 / num2}`);
      }
      break;
    default:
      alert("Error: Invalid operation.");
  }
}

calculator();
