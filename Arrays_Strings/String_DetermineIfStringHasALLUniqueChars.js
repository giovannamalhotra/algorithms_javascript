/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/

function hasUniqueChars(str) {
  
  var dict = {};
  
  for (var i=0; i < str.length; i++) {
   
    if ( dict[str[i]] ) { return false;}
    else { dict[str[i]] = 1;} 
  }  
  return true;
}  
  
  var strA = "abcde";

  console.log("string "  + strA + "has unique Chars?: " + hasUniqueChars(strA) );  



