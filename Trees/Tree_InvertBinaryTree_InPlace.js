/*
Invert a binary tree in place.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/


function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}


function InvertBTree(root) {
  
  var invertChildren = function(node) {
    
    if (node === null) {
        return null;
    }
    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    
    invertChildren(node.left);
    invertChildren(node.right);    
  }  
  
  invertChildren(root);
  
}  

function printTreeBFS(root) {

  var tempQueue = [];
  tempQueue.push(root);

  while (tempQueue.length > 0) {

    var tempNode = tempQueue.shift();
    console.log(tempNode.value);
    if (tempNode.left !== null) {tempQueue.push(tempNode.left);}
    if (tempNode.right !== null) {tempQueue.push(tempNode.right);}
  }
}



var root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(7);
root1.left.left = new Node(1);
root1.left.right = new Node(3);
root1.right.left = new Node(6);
root1.right.right = new Node(9);

printTreeBFS(root1);

InvertBTree(root1);

console.log("inverted Tree:");
printTreeBFS(root1);


//-------------------------------------------------------------------------------------------------------------------

//Solution 2:

var tree = {
    data: 4,
    left: {
        data: 2,
        left: {
            data: 1,
            left: null,
            right: null,
        },
        right: {
            data: 3,
            left: null,
            right: null,
        },
    },
    right:{
        data: 7,
        left:{
            data: 6,
            left: null,
            right: null,
        },
        right:{
            data: 9,
            left: null,
            right: null,    
        },
    }
}


function InvertBTree(root) {
 
  var invertChildren = function(node) {
    
    if (node === null) {
        return null;
    }
    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    
    invertChildren(node.left);
    invertChildren(node.right);    
  }  
  
  invertChildren(root);
  
}  

console.log("inverted Tree:" + JSON.stringify(tree));
InvertBTree(tree);
console.log("inverted Tree:" + JSON.stringify(tree));