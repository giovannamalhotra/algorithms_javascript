/* ------------- */
/* Simpler logic */
/* ------------- */
function powerOfNum(num, power) {

  if (power === 0) { return 1;}
  else if (power === 1) { return num;}
  else if (power > 1) { return  num * powerOfNum(num, power-1);} 
  else {
   
    var newPower = power*-1;
    return 1/powerOfNum(num, newPower);

  }

}  
var numParam = 2;
var powerParam = 4;

console.log("Power of " + numParam + " is: " + powerOfNum(numParam, powerParam));


/* ------------------------------------------------------------------------ */
/* More efficient logic. It calculates "halfPower" and multiplies by itself */
/* ------------------------------------------------------------------------ */
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    // base case
    if (n === 0) { return 1;}
    
    // recursive case: n is negative
    if ( n < 0) {
        return 1/power(x,n*-1) ;
    }
    // recursive case: n is odd
    if ( isOdd(n) ) { 
        return x*power(x,n-1);
    }
    // recursive case: n is even
    var halfPower = power(x,n/2);
    return halfPower * halfPower;
    
};

var displayPower = function(x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
//Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
//Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
//Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
//Program.assertEqual(power(3, -1), 1/3);
