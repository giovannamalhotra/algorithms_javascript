/*
The Euclidean Algorithm for finding GCD(A,B) is as follows:

    If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
    If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
    Write A in quotient remainder form (A = B⋅Q + R)
    Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)

Example:

Find the GCD of 270 and 192

    A=270, B=192
    A ≠0
    B ≠0
    Use long division to find that 270/192 = 1 with a remainder of 78. We can write this as: 270 = 192 * 1 +78
    Find GCD(192,78), since GCD(270,192)=GCD(192,78)
*/

function calcGCD(val1, val2) {

	if (val1 === 0) { return val2; }
	if (val2 === 0) { return val1; }

	if (val1 !== 0 && val2 !==0) {

		var remainder = val1%val2;
    	console.log("--------------");
    	console.log("val1:" + val1 + ", val2:" + val2 + ", remainder:" + remainder);  
    	console.log("--------------");
		return calcGCD(val2, remainder);
	}

}

//var val1 = 270;
//var val2 = 192;

//console.log("GCD of " + val1 + " and " + val2 + " is: " + calcGCD(val1, val2) );

var val1 = 72;
var val2 = 48;

console.log("GCD of " + val1 + " and " + val2 + " is: " + calcGCD(val1, val2) );

