/* Given 2 sorted arrays of different lengths, find the first "k" pairs whose sum are the lowest 
	
	[ 1, 2, 3]        --> m
	[ 100, 200, 300]  --> n

	Example:

	K = 4
	Result: (1, 100) , (1, 200) , (1, 300) , (2, 100)
*/

function findLowestSumPair(array1, array2, k) {

	var firstPointer = 0;
	var secondPointer = 0;
	var count = 0;
	var maxComb = array1.length * array2.length;

	var resultArr = [];
	var pairArr = [];

  
	if (k < 0 || k > maxComb) { return -1}

	while (count < k) {

		// Push the current value
    	pairArr = [];
		pairArr.push(array1[firstPointer]);
		pairArr.push(array2[secondPointer]);		
		resultArr.push(pairArr);
    	count++

    	console.log("Pair:" + pairArr + ", count:" + count + ", firstPointer:" + firstPointer + ", secondPointer:" + secondPointer);
 
    
		// Check which pointer should be incremented
		if ( (firstPointer === array1.length - 1) && (secondPointer === array2.length - 1) ) { break;}

		if (firstPointer === array1.length - 1) { firstPointer = 0; secondPointer++; continue;}
		if (secondPointer === array2.length - 1) { secondPointer = 0; firstPointer++; continue;}

		if (  array1[firstPointer + 1] + array2[secondPointer] <= array1[firstPointer] + array2[secondPointer + 1] ) {
			firstPointer++;
		} else {
			secondPointer++;
		}
	} 

	return resultArr;

}

var array1 = [1,2,3];
var array2 = [100,200,300];
var k = 4;
console.log("Lowest sum pairs:" + findLowestSumPair(array1, array2, k) );


