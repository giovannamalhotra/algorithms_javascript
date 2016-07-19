function Node(val) {
  
    this.value = val;
    this.traversed = false;
    this.left = null;
    this.right = null;
}  


function findMostLeftNode(node) {
 
    if (node.left === null) {
      return node;
    } else {
      return findMostLeftNode(node.left);
    }    
}  


function findNextNode(rootNode, val) {

    var resultNode = null;
  
    var getNext = function(node, val) {

      if (node === null) { return null;}
      
      if (node.value === val) {
        
        if (node.right !== null) { return findMostLeftNode(node.right);}
        else { 
          
          if (node.parent !== null && node.parent !== undefined) {
            var parent = node.parent;
            while( parent !== null && parent.value < val) { parent = parent.parent;}
            return parent;
          } else {
            return null;
          }
        }
        
      } else {
        
          if ( val < node.value) { 
            
            if (node.left === null) {return node;}
            else { return getNext(node.left, val);}            
          }
          else { 
            if (node.right === null) {
              var parent = node.parent;
              if (parent !== null) {
                while( parent.value < val) { parent = parent.parent;}
                return parent;
              } else {
                return null;
              }  
            }
            else { return getNext(node.right, val);}
          }  
        
      }
      
    }
    return getNext(rootNode, val);  
  
}  


    /* Example of a non-binary SEARCH Tree */
    var root = new Node(8);
    root.parent = null;
    root.left = new Node(4);
    root.left.parent = root;
    root.right = new Node(23);
    root.right.parent = root;
    root.left.left = new Node(3);
    root.left.left.parent = root.left; 
    root.left.right = new Node(5);
    root.left.right.parent = root.left;
    root.left.left.left = new Node(1);
    root.left.left.left.parent = root.left.left; 

    root.right.left = new Node(9);
    root.right.left.parent = root.right; 
    root.right.right = new Node(30);
    root.right.right.parent = root.right;

    var currentVal = 30;
    var nextNode = findNextNode(root, currentVal);
    var nextNodeVal = null;

    if (nextNode !== null) { nextNodeVal = nextNode.value;}
    

    console.log("Next node of:" + currentVal + " is:" + nextNodeVal);

