
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

function Node(val) {
  
  this.data = val;
  this.left = null;
  this.right = null;
}  


function copyTree(root) {
 
  var copyNode = function(nodeObj) {
        
    if (nodeObj === null) { return null;}
    else {
     
      var newNode = new Node(nodeObj.data);
      newNode.left = copyNode(nodeObj.left);
      newNode.right = copyNode(nodeObj.right);
      return newNode;
    }
    
  }  
  return copyNode(root);
}  

console.log("Original Tree:" + JSON.stringify(tree));
var newTree = copyTree(tree);
console.log("New Tree:" + JSON.stringify(newTree));
