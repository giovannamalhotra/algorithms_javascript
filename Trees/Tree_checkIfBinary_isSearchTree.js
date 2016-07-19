/*
  Implement a function to check if a binary tree is a binary search tree
*/

    function Node(val) {
      
        this.value = val;
        this.level = null;
        this.left = null;
        this.right = null;
    }  

    function isBinarySearchTree(root) {

      var isBinarySearch = function(node, min, max) {

        if (node === null) { return true;}

        if (node !== null) {

          if ( !isBinarySearch(node.left, min, node.value) || !isBinarySearch(node.right, node.value, max) ) { return false;}
          else {

              if (node.left !== null) {
            
                if (min !== null && node.left.value < min) { return false;}
                if (node.left.value > node.value) { return false;}
              }
            
              if (node.right !== null) {
              
                if (max !== null && node.right.value > max) { return false;}
                if (node.right.value < node.value) { return false;}
              }
          }  
          return true;
 
        }
      }  
      return isBinarySearch(this.root, null, null);
    }

    /* Example of a non-binary SEARCH Tree */
    var root = new Node(8);
    root.left = new Node(6);
    root.right = new Node(23);
    root.left.left = new Node(3);
    root.left.right = new Node(5);

    console.log("Tree is binary Search:" + isBinarySearchTree(root));

    /* Example of a binary SEARCH Tree */
    var root = new Node(8);
    root.left = new Node(4);
    root.right = new Node(23);
    root.left.left = new Node(3);
    root.left.right = new Node(5);


    console.log("Second tree is binary Search:" + isBinarySearchTree(root));


      
      