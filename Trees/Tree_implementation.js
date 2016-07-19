/*
                
                  13

        6                   15

  3         9         14          18

              12                

Queue: 13 -> 6 -> 15 -> 3 -> 9 -> 14 -> 18 -> 12

*/

// Create a linked list for each level 
var linkedListsArray = [];


function Node(data) { 
  
  this.data = data;
  this.left = null;
  this.right = null;
  this.parent = null;
  
}  


function Tree() {
  
  this.root = null;
  this.length = 0;
  
  var current;
  var parent;
  var found;
  
  // ---------------------//
  // Add elements to Tree  
  // ---------------------//
  this.add = function(data) {
   
    console.log("data:" + data);

    if (this.root === null) {
     
      this.root = new Node(data);
      
    } else {
     
      // Find right location
        found = false;
        current = this.root;
        parent = null;
        while (!found && current !== null) {
        
          if (current.data === data) { 
            // do not insert, value already exists
            found = true;
            break;
          }
          else if (data < current.data) {
            parent = current;
            current = current.left;
          } 
          else if (data > current.data) {
            parent = current;
            current = current.right;
          }  
          
        };
      
        if (!found && data < parent.data) {
          parent.left = new Node(data);
          parent.left.parent = parent;
        }  

        if (!found && data > parent.data) {
          parent.right = new Node(data);
          parent.right.parent = parent;
        }  

      
    }
    this.length++;
    
  }; 
  
  
 
  // ---------------------//
  // Return size of the Tree  
  // ---------------------//
  this.size = function() {
  
    return this.length;    
  };      
        
  
  // ---------------------//
  // Print Tree in Order  
  // ---------------------//
  this.printTree = function() {
  
    var printNode = function(node) {
      
      if (node !== null) {
      
        if (node.left !== null) {
           printNode(node.left);
        } 
        console.log(node.data + "-->");  
        
        if (node.right !== null) {
          printNode(node.right)
        }
      }  
      
    }  
    
    // Traverse in Order
    printNode(this.root);
  
  };  
  
  
  // ---------------------//
  // Create Array of Linked Lists per level  
  // ---------------------//
  this.createLinkedListsFromTree = function() {

    function createLinkedList(node, level) {

      //console.log("Inside createLinkedList... node:" + node + ", level:" + level);
      if (node == null) {
        // Do nothing, End of traversing
      } else {

        //console.log("node.data:" + node.data);
        if (level < linkedListsArray.length) {

          linkedListsArray[level] = linkedListsArray[level] + " " + node.data;

        } else {

          linkedListsArray.push(node.data);
        } 

        createLinkedList(node.left, level + 1);
        createLinkedList(node.right, level + 1);

      }  

    } 

    createLinkedList(this.root, 0);  
  
  };
  

  // ---------------------//
  // Print Tree per level using BFS logic  
  // ---------------------//
  this.BFSPrint = function() {

    var BFSQueue = [];
    
    if (this.root !== null) { 
        
        BFSQueue.push(this.root);
    
        var current;
        while ( BFSQueue.length > 0 ) {

          current = BFSQueue[0];
          //console.log("current.data:" + current.data);
          
          BFSQueue.shift();

          if (current !== null) { 
            console.log(current.data);  //print current node value

            if (current.left !== null) { BFSQueue.push(current.left); }
            if (current.right !== null) { BFSQueue.push(current.right); }

          }

        }  
    }
    
  }  
  
} 


var myTree = new Tree();
myTree.add(13);
myTree.add(6);
myTree.add(3);
myTree.add(9);
myTree.add(15);
myTree.add(12);
myTree.add(14);
myTree.add(18);

myTree.printTree();

myTree.createLinkedListsFromTree();
console.log("linkedListsArray.length:" + linkedListsArray.length);

for (var i=0; i<linkedListsArray.length; i++) {
console.log("linkedListsArray[" + i + "]:" + linkedListsArray[i]);
  
}  

console.log("----- BSF Print: -----");
myTree.BFSPrint();

