export var AnagramManager = {
  isAnagram: function(word1, word2) {
    var result = false;
    var wordHash = {};

    // Lower-case and alphanumeric only.
    word1 = word1.toLowerCase().replace(/[^a-z0-9]/gi,'');
    word2 = word2.toLowerCase().replace(/[^a-z0-9]/gi,'');

    // Build a hash of the letters.
    word1.split('').forEach(function(letter) {
      wordHash[letter] = wordHash[letter] ? wordHash[letter] + 1 : 1;
    });

    // Go through each letter in word 2 and subtract from the hash.
    var allLettersExist = word2.split('').every(function(letter) {
      var allExist = true;

      if (!wordHash[letter]) {
        // This word contains a letter not found within word1. End check.
        allExist = false;
      }
      else {
        // Subtract 1 for usage of this letter. The hash value will be 0, if this was the last use of this letter.
        wordHash[letter]--;
      }

      return allExist;
    });

    if (allLettersExist) {
      // All letters in word 2 exist within word 1. Now check if all letters in word 1 have been utilized.
      result = Object.keys(wordHash).every(function(key) {
        // Every hash slot should be 0 (letter(s) used).
        return !wordHash[key];
      });
    }

    return result;
  }
};