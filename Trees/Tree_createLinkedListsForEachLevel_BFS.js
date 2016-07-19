function LinkListNode(val) {
  this.value = val;
  this.next = null;
}


function Node(val) {
  
    this.value = val;
    this.level = null;
    this.left = null;
    this.right = null;
}  


function Tree(elemArray) {

  var createSubTree = function(subArray) {
   
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

      node.left = createSubTree(subArray.slice(0,middle));
      node.right = createSubTree(subArray.slice(Number(middle + 1), subArray.length));
    } 
    
    return node;
    
  };

  this.printTree = function() {
   
    var printNode = function(nodeObj) {
      
      if (nodeObj !== null) {
        if (nodeObj.left !== null) { printNode(nodeObj.left);}
        console.log(nodeObj.value);
        if (nodeObj.right !== null) { printNode(nodeObj.right);}
      }
    }  
    
    printNode(this.root);
    
  };
  
  
  this.linkedListDictionary = {};
  console.log(", linkedListDictionary:" + JSON.stringify(this.linkedListDictionary));
  
  var addNodeToLinkList = function(node) {

    console.log("Inside addNodeToLinkedList... node.level:" + node.level);
    //console.log(", this.linkedListDictionary:" + JSON.stringify(this.linkedListDictionary));
/*    
    if (typeof this.linkedListDictionary[node.level] === undefined) {
     
      this.linkedListDictionary[node.level] = [];
    } 
          
    var lnode = new LinkListNode(node.value);
    this.linkedListDictionary[node.level].push(lnode);    
*/
  }  
  
  
  this.printTreeInLevels = function() {
   
    var queue = [];
    this.root.level = 0;
    queue.push(this.root);
    
    while (queue.length > 0)  {
      
      var node = queue.shift();
      console.log(node.value);

      if (typeof this.linkedListDictionary[node.level] === "undefined") {
     
        this.linkedListDictionary[node.level] = [];
      } 
          
      var lnode = new LinkListNode(node.value);
      this.linkedListDictionary[node.level].push(lnode);    
      
      
      if (node.left !== null) { node.left.level = node.level + 1; queue.push(node.left);}
      if (node.right !== null) { node.right.level = node.level + 1; queue.push(node.right);}
    }  
    
  }  
  
  
  
  this.root = createSubTree(elemArray);
  console.log("ROOT:" + JSON.stringify(this.root));
 
}

var numArray = [1,3,4,5,8,9,23,30];
var newTree = new Tree(numArray);
newTree.printTree();

console.log("-----------------------");
newTree.printTreeInLevels();

console.log("-----------------------");
JSON.stringify(newTree.linkedListDictionary);
