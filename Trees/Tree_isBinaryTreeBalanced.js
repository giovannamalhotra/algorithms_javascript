function Node(val) {
  
    this.value = val;
    this.left = null;
    this.right = null;
}  


function Tree(elemArray) {

  var createSubTree = function(subArray) {
   
    //console.log("subArray:" + subArray + ", subArray.length:" + subArray.length);
    if (subArray.length <= 0) { return null;}
    if (subArray.length === 1) { 
     
      var node = new Node(subArray[0]);
      node.left = null;
      node.right = null;
    }  
    
    if (subArray.length === 2) { 
     
      var node = new Node(subArray[1]);
      node.left = new Node(subArray[0]);
      node.right = null;
    }  
    
    if (subArray.length >= 3) {
      var middle = Math.floor(subArray.length/2);
      var node = new Node(subArray[middle]);

      //console.log("middle:" + middle + ", subArray.slice(0,middle):" + subArray.slice(0,middle) + ", subArray.slice(middle  + 1):" + subArray.slice(middle + 1));
      node.left = createSubTree(subArray.slice(0,middle));
      node.right = createSubTree(subArray.slice(Number(middle + 1), subArray.length));
    } 
    
    //console.log("node:" + JSON.stringify(node));
    return node;
    
  };

  this.printTree = function() {
   
    var printNode = function(nodeObj) {
      
      //console.log("Inside printNode... nodeObj:" + nodeObj + ", nodeObj stringified:" + JSON.stringify(nodeObj));
      if (nodeObj !== null) {
        if (nodeObj.left !== null) { printNode(nodeObj.left);}
        console.log(nodeObj.value);
        if (nodeObj.right !== null) { printNode(nodeObj.right);}
      }
    }  
    
    //console.log("Inside printNode... this.root:" + JSON.stringify(this.root));
    printNode(this.root);
    
  };  
    
  
  this.root = createSubTree(elemArray);
  console.log("ROOT:" + JSON.stringify(this.root));
  //return this.root;  

  
  this.isBinaryTreeBalanced = function() {

    var getHeight = function(node) {

      if (node === null) { return 0;}

      else {

        var leftHeight = getHeight(node.left);
        var rightHeight = getHeight(node.right);

        if ( leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1 ) {
          return -1;
        } else {
          return Math.max(leftHeight, rightHeight) + 1;
        }  

      }  
    };

    if (getHeight(this.root) === -1) { return false;}
    else { return true;}
  }; 

}

var numArray = [1,3,4,5,8,9,23,30];
var newTree = new Tree(numArray);
newTree.printTree();

console.log("TreeIsBalanced:" + newTree.isBinaryTreeBalanced());

