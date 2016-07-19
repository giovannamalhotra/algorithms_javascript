/*
  Write a method to compute all permutations of a string of unique characters
  Example: "azt" = azt, zat, zta, atz, taz, tza

*/

function getPermutations(str) {
  
    var permutations = [];
  
    if (str.length === 0) {return null;}

    if (str.length === 1) {
      permutations.push(str);
      return permutations;
    }

  
    var first = str.charAt(0);
    var remainder = str.substring(1);
    var subPerms = [];
    var newStr = "";
  
    //console.log("first:" + first + ", remainder:" + remainder);
    subPerms = getPermutations(remainder);
       
    if (subPerms !== null && subPerms.length > 0) {
      
      //permutations.push(str);
      for (var i=0; i<subPerms.length; i++) {

        newStr = first + subPerms[i];  
        permutations.push(newStr);
        //console.log(", subPerms[i]:" + subPerms[i]);
        
        for (var j=1; j<=subPerms[i].length; j++) {

          newStr = subPerms[i].substr(0,j) + first + subPerms[i].substr(j);
          //console.log("i:" + i + ", j:" + j + ", subPerms[i].substring(0,j):" + subPerms[i].substring(0,j) + ", first:" + first + ", subPerms[i].substring(j):" + subPerms[i].substring(j) + ", newStr:" + newStr);
          permutations.push(newStr);

        }  

      }
    }
    return permutations;
}  


var str1 = "azt";
var arr = getPermutations(str1);
console.log(arr);

