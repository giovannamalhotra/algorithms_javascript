function isPalindrome(str) {
 
  var strLen = str.length;
  var firstChar = str.charAt(0);
  var lastChar = str.charAt(strLen - 1);
  
  if ( strLen <= 1) { return true;}
  
  if (strLen === 2) {
    if (firstChar === lastChar) { return true;}
    else {return false;}
    
  } else {
  
    return isPalindrome(str.substring(1, strLen-1));
    
  }    
}

var strParam = "rotor";

if ( isPalindrome(strParam) ) { console.log(strParam + " is Palindrome");}
else { console.log(strParam + " is NOT Palindrome");}
  


/*

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length === 1 || str.length === 0) {
        return true;
    }    
    // base case #2
    if ( firstCharacter(str) !== lastCharacter(str) ) {
        return false;    
    }    
    
    // recursive case
    return isPalindrome(middleCharacters(str));

};

var checkPalindrome = function(str) {
    console.log("Is this word a palindrome? " + str);
    console.log(isPalindrome(str));
};

checkPalindrome("a");
//Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
//Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
//Program.assertEqual(isPalindrome("rotor"), true);

*/