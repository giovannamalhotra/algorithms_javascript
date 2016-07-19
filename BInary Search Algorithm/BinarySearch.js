/*  -------------------------------- */
/*  ------- Binary Search ---------- */
/*  -------------------------------- */
function binarySearch(array, target) {
	var n = array.length;

	var i;
	var minIndex = 0;
	var maxIndex = n-1;
	var guessIndex; 
	var targetLocation;
	var count = 0;

	while (minIndex <= maxIndex) {

		guessIndex = minIndex + Math.floor((maxIndex - minIndex)/2); 

/*  
    console.log("--------------------");  
    console.log("target:" + target);
    console.log("guessIndex:" + guessIndex);
    console.log("array[guessIndex]:" + array[guessIndex]);
    console.log("minIndex:" + minIndex);
    console.log("maxIndex:" + maxIndex);
*/    
		if (array[guessIndex] === target) {
			return guessIndex;
		}
		if (array[guessIndex] < target) {
			minIndex = parseInt(guessIndex + 1, 10);
		}
		else if (array[guessIndex] > target) {
			maxIndex = parseInt(guessIndex - 1, 10);
		}
    
/*	console.log("After comparisons... guessIndex:" + guessIndex + ", minIndex:" + minIndex + ", maxIndex:" + maxIndex);
    console.log("count:" + count); */
    }

    if (minIndex > maxIndex) {
    	return -1;
    }	
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var target = 13;
var targetLocation = binarySearch (primes, target);

console.log("primes;" + primes);
console.log("target:" + target);
console.log("targetLocation:" + targetLocation);
