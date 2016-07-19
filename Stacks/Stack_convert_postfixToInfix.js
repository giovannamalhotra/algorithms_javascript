function postfixToInfix(exp) {

  console.log("exp:" + exp);

  exp = exp.replace(/\s/g, "");
  var result = [];
  var val1 = "";
  var val2 = "";
  var temp = "";
    
  for (var i=0; i<exp.length; i++) {
    
    if ( !isNaN(exp.charAt(i)) ) {
    
        result.push(exp.charAt(i));
      
    } else {
                    
        val1 = result.pop();
        val2 = result.pop();
        temp = val2 + " " + exp.charAt(i) + " " + val1;
        result.push(temp);
    }
    
  }  

  
  return result;
  
}  



var postfixExp = "5 3 6 * + 5 3 / - 7 +";

console.log("postfix expression:" + postfixToInfix(postfixExp) );