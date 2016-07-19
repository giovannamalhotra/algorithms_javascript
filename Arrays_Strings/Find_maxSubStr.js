/*
Input:  bbadccdchhe
output: dccd 

Use set to track if substring is part of existing potential substring
*/


function findMax2CharStr(str) {
	
	var maxStr = "";
	var last2char = "";
	var tempStr = "";
	var firstChar = "";
	var secondChar = "";


	for (var i=0; i<str.length; i++) {

		if (tempStr === "") {
			tempStr = str.charAt(i);
		} else {

			if ( str.indexOf(tempStr.charAt(i)) )
				tempStr = tempStr + str.charAt(i);

		}



	}

}