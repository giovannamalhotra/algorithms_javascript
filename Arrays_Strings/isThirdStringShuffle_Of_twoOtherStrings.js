/*
Check if a String is valid shuffle of two String?
You are given 3 strings: first,  second, and  third. 
For example, given first = "abc" and second = "def",  third = "dabecf" is a valid shuffle since it preserves the character ordering of the two strings. 
So, given these 3 strings write a function that detects whether third String is a valid shuffle of first and second String.
*/

var isShuffle = function(s1, s2, s3) { 

	var founds1 = false;
	var founds2 = false;
	var s1pointer = 0;
	var s2pointer = 0;
  
	for (var i=0; i<s3.length; i++) {

		// Check for S1 string first
		if (s1pointer === s1.length - 1) { founds1 = true;}


		if ( !founds1 && s3.charAt(i) === s1.charAt(s1pointer) ) {
			s1pointer++;
		}

		// Check for S2 string
		if (s2pointer === s2.length - 1) { founds2 = true;}

		if ( !founds2 && s3.charAt(i) === s2.charAt(s2pointer) ) {
			s2pointer++;
		}
    
    //console.log("char:" + s3.charAt(i) + ", s1pointer:" + s1pointer + ", s2pointer:" + s2pointer + ", founds1:" + founds1 + ", founds2:" + founds2);
		if (founds1 && founds2) { break;}
	}	

	if (founds1 && founds2) { return true;}
	else { return false;}

}

var first = "dabc";
var second = "def";
var third = "dadcefc";  //false
var third = "dabecf"; //true
console.log("First: " + first);
console.log("Second: " + second);
console.log("Third: " + third);
console.log("Is Shuffle: " + isShuffle(first, second, third));

