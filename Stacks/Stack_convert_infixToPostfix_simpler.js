function infixToPostfix(infixExp) {
  
  
  var cleanedExp = infixExp.replace(/\s+/g, "");
  var exprArray = cleanedExp.split(/([\+\-\*\/\^\(\)])/);

  console.log("infixExp:" + infixExp);
  console.log("exprArray:" + exprArray);
  console.log(exprArray.length);
  
  //var operandsStack = [];
  var operatorsStack = [];
  var result = [];
  
  var lastOperatorIndex = 0;
  var prevOperator = "";
  
  var operators = {

    "^": {
      precedence: 4,
      //associativity: "Right"
    },
    "/": {
      precedence: 3,
      //associativity: "Left"
    },
    "*": {
      precedence: 3,
      //associativity: "Left"
    },
    "+": {
      precedence: 2,
      //associativity: "Left"
    },
    "-": {
      precedence: 2,
      //associativity: "Left"
    }
  }
  
  for (var i=0; i<exprArray.length; i++) {
    
    if (exprArray[i] !== "") { 
    
        if (!isNaN(exprArray[i])) { //It is a number

            result.push(exprArray[i]);

        } else {  // It is an operator

 
          if ( operatorsStack.length === 0) {
            
            operatorsStack.push(exprArray[i]);
            
          } else {  
          
              lastOperatorIndex = operatorsStack.length - 1;
              //var prevOperator = operatorsStack[lastOperatorIndex];
              prevOperator = operatorsStack[operatorsStack.length - 1];
              
              console.log("prevOperator:" + prevOperator);

              if ( operators[exprArray[i]].precedence > operators[prevOperator].precedence ) {

                      operatorsStack.push(exprArray[i]);

              } else { //New operator has less or equal precedence as the one in the operators stack

                var moveOperator = true;
                
                while ( moveOperator && operatorsStack.length - 1 >=0 ) {
                  
                      result.push(operatorsStack[operatorsStack.length - 1]);    
                      operatorsStack.pop();
                  
                      if (operatorsStack.length > 0) {
                          prevOperator = operatorsStack[operatorsStack.length - 1];

                          //console.log("-----------");
                          //console.log("operatorsStack:" + operatorsStack);
                          //console.log("prevOperator:" + prevOperator);
                          //console.log("-----------");

                          if ( operators[exprArray[i]].precedence > operators[prevOperator].precedence ) {

                            operatorsStack.push(exprArray[i]);  
                            moveOperator = false;
                          }   
                      }
                        else {
                      
                          operatorsStack.push(exprArray[i]);  
                          moveOperator = false;
                      }
                  
                }  
                
               
                
              }
           }

        }
     }

  }
  
  // Push remaining operators
  for (var i=operatorsStack.length - 1; i>=0; i-- ) {
  
     result.push(operatorsStack[i]); 
    
  }   
  
  
  console.log("operatorsStack:" + operatorsStack);
  return result;
  
} 


//var infixExp = "5 + 3 * 6 - ( 5 / 3 ) + 7";
var infixExp = "5 + 3 * 6 -  5 / 3  + 7";

console.log("postfix expression:" + infixToPostfix(infixExp) );


