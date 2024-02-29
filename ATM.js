// Sample user data stored in a two-dimensional array
const userData = [["Ani Beroshvili", "123456789", 1000]];

function checkBalance() {
  const accountNumber = prompt("Enter your account number:");
  const user = findUser(accountNumber);

  if (user) {
    alert(`Account Holder: ${user[0]}\nAccount Balance: $${user[2]}`);
  } else {
    alert("User not found. Please check your account number.");
  }
}

function deposit() {
  const accountNumber = prompt("Enter your account number:");
  const user = findUser(accountNumber);

  if (user) {
    const depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
      user[2] += depositAmount;
      alert(`Deposit successful. New balance: $${user[2]}`);
    } else {
      alert("Invalid deposit amount. Please enter a valid positive number.");
    }
  } else {
    alert("User not found. Please check your account number.");
  }
}

function withdraw() {
  const accountNumber = prompt("Enter your account number:");
  const user = findUser(accountNumber);

  if (user) {
    const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (
      !isNaN(withdrawAmount) &&
      withdrawAmount > 0 &&
      withdrawAmount <= user[2]
    ) {
      user[2] -= withdrawAmount;
      alert(`Withdrawal successful. New balance: $${user[2]}`);
    } else {
      alert(
        "Invalid withdrawal amount. Please enter a valid positive number within your balance."
      );
    }
  } else {
    alert("User not found. Please check your account number.");
  }
}

function findUser(accountNumber) {
  return userData.find((user) => user[1] === accountNumber);
}
