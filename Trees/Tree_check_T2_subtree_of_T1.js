/*
Create an algorithm to decide if T2 is a subtree of T1
*/
function Node (key) {

  this.key = key; 
  this.left = null;
  this.right = null;

}  

function matchTrees(root1, root2) {
  
  if (root1 === null && root2 === null) {return true;}
  
  if ( (root1 === null && root2 !== null) || (root1 !== null && root2 === null) ) { return false;}
        
  if (root1.key === root2.key) {
   
    return matchTrees(root1.left, root2.left) && matchTrees(root1.right, root2.right);
  } else {
    return false;
  }
  
}  



function includesTree(node1, subTreeRoot) {
  
  //console.log("---------------------------");
  //console.log("node1:" + JSON.stringify(node1) );
  //console.log("subTreeRoot:" + JSON.stringify(subTreeRoot) );
  
  if (subTreeRoot === null) { return true;}
  if (node1 === null) { return false;}
  
  if (node1.key === subTreeRoot.key) {
    return matchTrees(node1, subTreeRoot);
  } else {
   
    return includesTree(node1.left, subTreeRoot) || includesTree(node1.right, subTreeRoot);
  }  
  
}


var root1 = new Node(8);
root1.left = new Node(4);
root1.right = new Node(23);
root1.left.left = new Node(3);
root1.left.right = new Node(5);
root1.right.left = new Node(9);
root1.right.right = new Node(30);
root1.right.left.left = new Node(8);
root1.right.left.right = new Node(10);



var root2 = new Node(23);
root2.left = new Node(9);
root2.right = new Node(30);
root2.left.left = new Node(8);
root2.left.right = new Node(10);


var result = includesTree(root1, root2);
console.log("tree root2 is subtree of root1:" + result);



