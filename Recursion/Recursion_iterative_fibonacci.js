/* ----------------------------------
Note: 
The recursive approach is worse than iterative. 
Notice that the recursive procedure calls itself twice at the last line. Thus, the program takes an amount of time that grows exponentially with the input.

  1     1      2       3          5     8     13     21     34     55  ....

                                      (3+5)
            (1+1) (1 + 2)    (2  + 3)  .... 
             1 1   1 (1+1) (1+1) (1+2) ....     

However, we could apply memorization pattern (saving previous results in dictionary for quick key based access), 
although this pattern isn't a match for the iterative approach (but definitely an improvement over the simple recursion)
----------------------------------- */

/* ------------------------------- */
/* Recursive Fibonacci calculation */
/* ------------------------------- */
/*
  Running time: Exponential: O(2n):

  T(n) = T(n-1) + T(n-2) + O(1) which is equal to

  T(n) = O(2n-1) + O(2n-2) + O(1) = O(2n)

*/
function calcFibonacciRecur(num) {
  
  if (num <= 2 ){ return 1;}
  else {
  
      return calcFibonacciRecur(num - 2) + calcFibonacciRecur(num - 1);
  }  

}


/* ------------------------------- */
/* Iterative Fibonacci calculation */
/* ------------------------------- */
function calcFibonacci(num) {
  
  if (num <= 2) { return 1;}
  else {
  
    var prev2 = 1;
    var prev1 = 1;
    var currentVal = 0;
    for (var i=3; i<=num; i++) {
      
      currentVal = prev2 + prev1;
      prev2 = prev1;
      prev1 = currentVal;
    }
    return currentVal;
  }  
}


var n = 4;

console.log("the nth value in the Fibonacci sequence is:" + calcFibonacci(n) );
console.log("the nth value in the Fibonacci sequence is (recursively):" + calcFibonacciRecur(n) );
