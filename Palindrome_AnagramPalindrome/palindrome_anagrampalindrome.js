/**
 * Problem 1: isPalindrome
 *
 * Given an input string, return true or false if the string is a palindrome.
 *
 * Challenge: Have your function ignore spaces, commas, and periods.
 *            Have your function only loop through half of the string.
 **/

function isPalindrome(word) {

  var wordLen = word.length;
  var i;
  for (i=0; i<Math.floor(wordLen/2); i++) {
    if (word.charAt(i) !== word.charAt(wordLen-1-i)) {
        return false;
    }
  }
  return true;
  
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("outco")); // false


/**
 * Problem 2: anagramPalindrome
 *
 * Given an input string, determine whether any anagram of the string is a palindrome
 **/

function anagramPalindrome(word) {
  var wordLen = word.length;
  var i;
  var dictionary = {};
  
  for (i=0; i<wordLen; i++) {
    
    if ( !dictionary[word.charAt(i)] ) {
      dictionary[word.charAt(i)] = 1;
      
    } else {
      dictionary[word.charAt(i)]++;
      
    }
    
  } 

  // For an anagram to be a Palindrome, all the characters in a string must occur even number of times 
  // except for one which appears in the middle of the string.  
  var oddsCount = 0;
  
  for (var key in dictionary) {
    if ( dictionary[key]%2 !== 0) {
      if (oddsCount === 1) {
        return false;
      } else {
        oddsCount++;
      }
    } 
  }
  return true;
  
};

// "david" => "vidad"
console.log(anagramPalindrome("racerac")); // true