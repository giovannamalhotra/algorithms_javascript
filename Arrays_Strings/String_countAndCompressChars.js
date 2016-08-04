function countAndCompressChars(str) {
 
  var prevChar = str[0];
  var currentChar = str[0];
  var count = 0;
  var newStrArray = [];
  
  for (var i=0; i<str.length; i++) {

    currentChar = str[i];
    if (prevChar === currentChar) {
      count++;
    } else {
      newStrArray.push(prevChar);
      newStrArray.push(count);
      count = 1;
    }  
    prevChar = currentChar;
    
  }
  
  if (count > 0) {
    newStrArray.push(prevChar);
    newStrArray.push(count);
  }  
  
  return newStrArray;
}  
  
  var a = "aabccccaaa";
  console.log("Given string: " + a + ", new string: " + countAndCompressChars(a));
  