// Two-dimensional array (dictionary) for translations
const dictionary = [
  ["Georgian", "English", "ქართული", "Georgian"],
  ["Georgian", "Russian", "ქართული", "Грузинский"],
  ["English", "Georgian", "cat", "კატა"],
  ["Georgian", "English", "კატა", "cat"],
  ["English", "Georgian", "dog", "ძაღლი"],
  ["Georgian", "English", "ძაღლი", "dog"],
  ["Russian", "Georgian", "кот", "კატა"],
  ["Russian", "Georgian", "собака", "ძაღლი"],
];

function translateWord(languagePair, word) {
  languagePair = languagePair.toLowerCase();

  // Search for translation in the dictionary
  for (const entry of dictionary) {
    const [fromLang, toLang, originalWord, translatedWord] = entry;
    if (
      fromLang.toLowerCase() === languagePair.split("-")[0] &&
      toLang.toLowerCase() === languagePair.split("-")[1] &&
      originalWord.toLowerCase() === word.toLowerCase()
    ) {
      return translatedWord;
    }
  }

  // If the translation is not found, ask the user to add it to the dictionary
  if (
    confirm("Translation not found. Do you want to add it to the dictionary?")
  ) {
    const newTranslation = prompt(
      `Enter the translation of "${word}" in ${languagePair}:`
    );
    dictionary.push([
      languagePair.split("-")[0],
      languagePair.split("-")[1],
      word,
      newTranslation,
    ]);
    return newTranslation;
  }

  return "Translation not found.";
}

function translatorApp() {
  const languagePair = prompt(
    "Choose a language pair (e.g., Georgian-English):"
  );
  const wordToTranslate = prompt("Enter a word or phrase to translate:");

  const translatedWord = translateWord(languagePair, wordToTranslate);

  alert(`Translated word/phrase: ${translatedWord}`);
}

// Call the translator app function
translatorApp();
