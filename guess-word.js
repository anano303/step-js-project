function hangman() {
  const words = ["კატა", "ძაღლი", "დეველოპერი", "პროგრამა", "კომპიუტერი"];
  const selectedWord = words[Math.floor(Math.random() * words.length)];
  let hiddenWord = "_ ".repeat(selectedWord.length);
  let attempts = 0;
  let guessedLetters = [];

  while (attempts < 6) {
    alert(`Word: ${hiddenWord}\nGuessed Letters: ${guessedLetters.join(", ")}`);

    let userGuess = prompt("გამოიცანი ასო-ბგერა");

    if (userGuess === null) {
      alert("Game over. You chose to exit.");
      return;
    }

    userGuess = userGuess.toLowerCase();

    if (!/[ა-ჰ]/.test(userGuess) || guessedLetters.includes(userGuess)) {
      alert("Invalid or repeated guess. Try again.");
      continue;
    }

    guessedLetters.push(userGuess);

    if (selectedWord.includes(userGuess)) {
      hiddenWord = selectedWord
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join("");

      if (hiddenWord === selectedWord) {
        alert(`Congratulations! You guessed the word: ${selectedWord}`);
        return;
      }
    } else {
      alert("Incorrect guess. Try again.");
      attempts++;
    }
  }

  alert(`Sorry, you're out of attempts. The word was: ${selectedWord}`);
}

hangman();
