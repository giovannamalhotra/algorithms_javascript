/*
Given an infiinite number of quarters (25 cents), dimes (10 cents), 
nickels (5 cents) and pennies (1 cent), 
write code to calculate the number of ways of representing n cents

*/

function calcCombinationCoins(amount, coins, coinNum) {
  
  if (coinNum === coins.length - 1) { return 1;}
  
  
  var totalWays = 0;
  for (var i=0; i*Number(coins[coinNum])<=amount; i++) {
   
    totalWays += calcCombinationCoins(amount - (i*coins[coinNum]), coins, Number(coinNum) + 1);
    
  }  
  return totalWays;  
  
}  


var coins = [25, 10, 5, 1];
var totalCombinations = calcCombinationCoins(100, coins, 0);
console.log("totalCombinations:" + totalCombinations);