function infixToPostfix (exp) {
  
  
  var outputStr  = "";  
  var operatorStack  = [];
  

  console.log(exp);

  exp = exp.replace(/\s/g, "");
  var expArray = exp.split(/([\^\*\/\+\-])/);  

  console.log(exp);
  console.log(expArray);
  
  var operators = {
   
    "^": { precedence: 4},
    "*": { precedence: 3},
    "/": { precedence: 3},
    "+": { precedence: 2},
    "-": { precedence: 2}
  } 
  
  var lastOperator = "";


  for (var i=0; i<expArray.length; i++) {
   
    if ( !isNaN(expArray[i]) ) {
    
      outputStr = outputStr + expArray[i];      
    }  
    else {
    
      if (lastOperator === "") {
       
        operatorStack.push(expArray[i]);
        lastOperator = expArray[i];
        
      } else {
      
        if (operators[expArray[i]].precedence >= operators[lastOperator].precedence ) {
          
          // current operator has higher precedence, so push it to stack
          operatorStack.push(expArray[i]);
          lastOperator = expArray[i];
        
        }  else {
        
          // current operator has lower precedence, then pop previous operators.
          lastOperator = operatorStack.pop();
          while ( operators[expArray[i]].precedence <= operators[lastOperator].precedence) {
            
            outputStr = outputStr + lastOperator;
            
            if (operatorStack.length > 0) {
              
              lastOperator = operatorStack.pop();
            } else {
              break;  
            }  
          }

          operatorStack.push(expArray[i]);
          
        }  
        
      }  
      
    }  
    
  
  } 
  
  for (var j=0; j<operatorStack.length; j++) {
  
     outputStr = outputStr + operatorStack.pop(); 
    
  }  
  
  return outputStr; 
  
}  
  

var infixExp = "5 + 3 * 6 - 5 / 3 + 7";

console.log("postfix expression:" + infixToPostfix(infixExp) );