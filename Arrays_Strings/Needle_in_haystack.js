/*
Given a string, return the first index of the first occurrence of the string in another string. Return -1 if the needle is not present in the haystack.
Do not use string methods like indexOf(), substring(), etc. Assume you are building the library of string functions, so they don't exist yet.
Test several test cases such as:
Haystack: ‘I like to walk my dog on the beach.’ needle: dog
Haystack: 'abababc' needle = 'ababc'
What is the time complexity of the implementation? var haystack = "burger and fries";

var needle = 'fries';
*/

function finder(needle, haystack) {

	var tempStr = "";
	var firstIndex = -1;
	var needlePointer = -1;

	for (var i=0; i<haystack.length;i++) {

		if ( tempStr.length === 0 && haystack.charAt(i) === needle.charAt(0)) {
			tempStr = haystack.charAt(i);
			firstIndex = i;
			needlePointer = 0;
		}

		if ( tempStr.length > 0) {

			if (haystack.charAt(i) === needle.charAt(needlePointer + 1)) {
				tempStr = tempStr + haystack.charAt(i);
				needlePointer++;
			} else {
				tempStr = "";
				firstIndex = -1;
				needlePointer = -1;

				if (haystack.charAt(i) === needle.charAt(0)) {
					tempStr = haystack.charAt(i);
					firstIndex = i;
					needlePointer = 0;
				}		
			} 	
		} 
		
		if ( tempStr === needle ) { return firstIndex;}
	}

	return firstIndex;
}

var needle = "fries";
var haystack = "burger and fries";
var result = finder(needle, haystack);
console.log("needle:" + needle + ", haystack:" + haystack + ", index returned:" + result);

var needle = "dog";
var haystack = "I like to walk my dog on the beach";
var result = finder(needle, haystack);
console.log("needle:" + needle + ", haystack:" + haystack + ", index returned:" + result);

