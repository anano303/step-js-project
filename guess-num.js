function guessTheNumber() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  while (true) {
    let userGuess = prompt(`Guess the number between 1 and 100:`);

    if (userGuess === null) {
      alert("Game over. You chose to exit.");
      return;
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number within the specified range.");
      continue;
    }

    attempts++;

    if (userGuess === targetNumber) {
      alert(
        `Congratulations! You guessed the correct number in ${attempts} attempts.`
      );
      return;
    } else {
      alert(
        `Try again. The number is ${
          userGuess < targetNumber ? "higher" : "lower"
        }.`
      );
    }
  }
}

guessTheNumber();
