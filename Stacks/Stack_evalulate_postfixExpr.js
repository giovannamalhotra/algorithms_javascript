String.prototype.isNumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}


function MathSolver() {

    this.solvePostfix = function(postfix) {

        var resultStack = [];
        postfix = postfix.split(" ");

        for(var i = 0; i < postfix.length; i++) {

            if(postfix[i].isNumeric()) {

                resultStack.push(postfix[i]);
            } else {

                var a = resultStack.pop();
                var b = resultStack.pop();

                if(postfix[i] === "+") {
                    resultStack.push(parseInt(a) + parseInt(b));
                } else if(postfix[i] === "-") {
                    resultStack.push(parseInt(b) - parseInt(a));
                } else if(postfix[i] === "*") {
                    resultStack.push(parseInt(a) * parseInt(b));
                } else if(postfix[i] === "/") {
                    resultStack.push(parseInt(b) / parseInt(a));
                } else if(postfix[i] === "^") {
                    resultStack.push(Math.pow(parseInt(b), parseInt(a)));
                }
            }
        }
        if(resultStack.length > 1) {
            return "error";

        } else {
            return resultStack.pop();
        }
    }





}
var expr = "2 3 * 5 4 * + 9 -";

var mathSolverObj = new MathSolver();

var result = mathSolverObj.solvePostfix(expr);
console.log(result);
