/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

         _______3______
        /              \
     ___5__          ___1__
    /      \        /      \
    6      _2       0       8
          /  \
          7   4

For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Determine runtime for the solution
*/

function findLCA(root, node1, node2) {

  var findLCAinNode = function(node, node1, node2) {

    var result = {        
        LCA: null,
        node1Found: false,
        node2Found: false }


    if (!node) {return result};

    //console.log("---------------------------------------------");
    //console.log("Inside findLCAinNode.. node.data:" + node.data);

    var leftNodeResult = findLCAinNode(node.left, node1, node2);
    
    if (leftNodeResult && leftNodeResult.LCA) { 
      return leftNodeResult; // LCA was found so return leftNode object, not need to check right node
    }  
      
    var rightNodeResult = findLCAinNode(node.right, node1, node2);

    //console.log("left node result:" + JSON.stringify(leftNodeResult));  
    //console.log("right node result:" + JSON.stringify(rightNodeResult));  
    if (rightNodeResult && rightNodeResult.LCA) { 
      return leftNodeResult;
    }  

    if ((leftNodeResult && leftNodeResult.node1Found && rightNodeResult && rightNodeResult.node2Found) || (leftNodeResult && leftNodeResult.node2Found && rightNodeResult && rightNodeResult.node1Found) ) {
        //node 1 and node 2 were found among the two children
        result.LCA = node;
        result.node1Found = true;
        result.node2Found = true; 
        return result;
    }
    
    if ( (node === node1 && (leftNodeResult.node2Found || rightNodeResult.node2Found)) ||
      (node === node2 && (leftNodeResult.node1Found || rightNodeResult.node1Found)) ) {
        //node === node1, node 2 was found among the two children    
        result.LCA = node;
        result.node1Found = true;
        result.node2Found = true; 
        return result;
    }
    
    if (node === node1) {
        //node === node1, node 1 was the only one found
        result.node1Found = true;
        return result;
    }  

    if (node === node2) {
        //node === node2, node 2 was the only one found
        result.node2Found = true;
        return result;
    }
    
    if (leftNodeResult.node1Found) { result.node1Found = true;}
    if (leftNodeResult.node2Found) { result.node2Found = true;}
    if (rightNodeResult.node1Found) { result.node1Found = true;}
    if (rightNodeResult.node2Found) { result.node2Found = true;}

    return result;
  }

  var result = findLCAinNode( root, node1, node2);
  if (result.LCA) { 
    console.log("LCA was found:" + result.LCA.data)
  }
  else {
    console.log("LCA was not found");
  }

} 

var tree = {
    data: 3,
    left: {
        data: 5,
        left: {
            data: 6,
            left: null,
            right: null,
        },
        right: {
            data: 2,
            left: {
              data: 7,
              left: null,
              right: null,
            },
            right: {
              data: 4,
              left: null,
              right: null,
            },
        },
    },
    right:{
        data: 1,
        left:{
            data: 0,
            left: null,
            right: null,
        },
        right:{
            data: 8,
            left: null,
            right: null,    
        },
    }
}

findLCA(tree, tree.left, tree.left.right.right);