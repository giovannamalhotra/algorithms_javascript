/*
You are given a binary tree in which each node contains an integer value (which migth be positive or negative). 
Design an algorithm to print all paths which sum to a given value. 
The path does not need to start or end at the root or a leaf, but it must go in a straight line down.
*/

function Node(val) {

  this.value = val;
  this.left = null;
  this.right = null;
}



function findPathsToNumber(root, num) {

  var pathsList = [];
  var totSum = 0;
  
  var findPath = function(node, pathArray, level, num) {
     
    if (node.value === num) {
      pathArray[level].push(node.value);

    } else {
     
      if (node.value < num) {

        findPath(node.left, pathArray, level, num - Number(node.value));
        pathArray.push(c)
        findPath(node.right, pathArray, level, num - Number(node.value));

      }  else {

        pathArray
      }
    }
    
  } 

  var traverseTree = function() {

    //pass the level
  } 
  
  
}                   


var root = new Node(8);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.left.left.left = new Node(1);
root.left.left.right = new Node(4);
root.right.left = new Node(12);


