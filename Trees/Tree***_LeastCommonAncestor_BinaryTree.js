/*
Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor.

http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
*/

//Program to find LCA of n1 and n2 using one traversal of Binary tree
//It handles all cases even when n1 or n2 is not there in tree

 
// A binary tree node
function Node (key) {

  this.key = key; 
  this.left = null;
  this.right = null;

}  
 
/* This function retturn pointer to LCA of two given values n1 and n2 
 v1 is set as true by this function if n1 is found
 v2 is set as true by this function if n2 is found
*/
function findLCAUtil(root, n1, n2, v) {
     
    // Base Case
  if (root === null) {
        return null;
  }  
 
    // IF either n1 or n2 matches ith root's key, report
    // the presence by setting v1 or v2 as true and return
    // root (Note that if a key is ancestor of other, then 
    // the ancestor key becomes LCA)
  if (root.key === n1) {
        v[0] = true;
        return root;
  }      
 
  if (root.key === n2) {
        v[1] = true;
        return root;
  }  
 
    // Look for keys in left and right subtree
    var left_lca = findLCAUtil(root.left, n1, n2, v);
    var right_lca = findLCAUtil(root.right, n1, n2, v);
 
    // If both of the above calls return Non-NULL, then one key
    // is present in once subtree and other is present in other,
    // So this node is the LCA
    if (left_lca && right_lca) { return root;} 
 
    //Otherwise check if left subtree or right subtree is LCA
  if (left_lca !== null) { return left_lca;}
  else { return right_lca;}
} 
  
 
function find(root, k) {
     
    // Base Case
    if (root === null) {
          return false;
    }  
     
    // If key is present at root, or if left subtree or right
    // subtree , return true
    if (root.key === k || find(root.left, k) || find(root.right, k)) ) {
        return true;
    } else { 
     
      // Else return false
      return false;
    }
}
  

// This function returns LCA of n1 and n2 onlue if both
// n1 and n2 are present in tree, otherwise returns None
function findLCA(root, n1, n2) {
     
    // Initialize n1 and n2 as not visited
    v = [False, False];
 
    // Find lac of n1 and n2 using the technique discussed above
    var lca = findLCAUtil(root, n1, n2, v);
 
    // Returns LCA only if both n1 and n2 are present in tree
    if (v[0] && v[1] || v[0] && find(lca, n2) || v[1] and
        find(lca, n1)) {
        return lca;
    } else { 
       // Else return None
      return null;
    }  
}
  

// Driver program to test above function
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
 
var lca = findLCA(root, 4, 5);
 
if (lca !== null) {
    console.log("LCA(4, 5) = " + lca.key);
} else {
    console.log("LCA(4, 5), Keys are not present");
}

lca = findLCA(root, 4, 10);
if (lca !== null) {
    console.log("LCA(4,10) = " + lca.key);
} else {
    console.log("LCA(4,10), Keys are not present");
} 


