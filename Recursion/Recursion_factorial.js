/*  ------------------------------------ */
/*  ----- FACTORIAL - No recursion ----- */
/*  ------------------------------------ */

var factorial = function(n) {
    var result = 1;
    for (var i=1;i<=n; i++ ) {
        result = result * i;
    }    

    return result;
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));

//Program.assertEqual(factorial(5), 120);
//Program.assertEqual(factorial(0), 1);


/*  ------------------------------------ */
/*  -- FACTORIAL - R E C U R S I O N --- */
/*  ------------------------------------ */
/* 1. Each recursive call should be on a smaller instance of the same problem, that is, a smaller subproblem.  */
/* 2. The recursive calls must eventually reach a base case, which is solved without further recursion.        */

var factorial = function(n) {
	// base case: 
	if (n === 0) { return 1;}
	
	// recursive case:
    return n*factorial(n-1);

}; 

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

