function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}  


function printTree(root) {

    var printNode = function(nodeObj) {
    
      if (nodeObj !== null) { 
        printNode(nodeObj.left);
        console.log(nodeObj.value);
        printNode(nodeObj.right);
      }
    }
 
    printNode(root);    
} 


function buildTree(numArray1) {
  
  if (numArray1.length === 1) { 
      return new Node(numArray1[0]);
  }  

  if (numArray1.length === 2) {
   
    var newNode = new Node(numArray1[1]);
    newNode.left = new Node(numArray1[0]);
    newNode.right = null;
    return newNode;
  }  

  if (numArray1.length > 2) {

    var middleIndex = Math.floor(numArray1.length/2);
    //console.log("numArray1.length:" + numArray1.length + ", middleIndex:" + middleIndex + ", numArray1[middleIndex]:" + numArray1[middleIndex]);
    //console.log("numArray1.slice(0,middleIndex):" + numArray1.slice(0,middleIndex));
    //console.log("numArray1.slice(Number(middleIndex+1):" + numArray1.slice(Number(middleIndex+1)));
    
    // Build Tree
    var newNode = new Node(numArray1[middleIndex]);
    newNode.left = buildTree(numArray1.slice(0,middleIndex));
    newNode.right = buildTree(numArray1.slice(Number(middleIndex+1), numArray1.length));

    return newNode;
  }
  return null;
}


var numArray = [1,3,4,5,8,9,23,30];
var root = buildTree(numArray);
printTree(root);
