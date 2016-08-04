/*
Given a binary tree, return the vertical order traversal of its nodes' values

Examples:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
 
return its vertical order traversal as:
[
  [9],
  [3,15],
  [20],
  [7]
]
*/

function Node(val) {
	this.data = val;
	this.left = null;
	this.right = null;
}


function treeVerticalTraversal(root) {

	// traverse in levels. Store the node in each hash map slot based on their location weight
	var verticalOrderMap = {};
	var lowestWeight = 0;
	var highestWeight = 0;

	var processNodeChildren = function(nodeObj, weight, verticalOrderMap) {

		if (nodeObj.left) {
			var childWeight = weight - 1;
      
			if (verticalOrderMap[childWeight] === null || verticalOrderMap[childWeight] === undefined) {
				verticalOrderMap[childWeight] = [];
			}
			verticalOrderMap[childWeight].push(nodeObj.left);
			processNodeChildren(nodeObj.left, weight - 1, verticalOrderMap);

			if (childWeight < lowestWeight) { lowestWeight = childWeight;}
			if (childWeight > highestWeight) { highestWeight = childWeight;}
		}

		if (nodeObj.right) {
			var childWeight = weight + 1;

			if (verticalOrderMap[childWeight] === null || verticalOrderMap[childWeight] === undefined) {
				verticalOrderMap[childWeight] = [];
			}
			verticalOrderMap[childWeight].push(nodeObj.right);
			processNodeChildren(nodeObj.right, childWeight, verticalOrderMap);

			if (childWeight < lowestWeight) { lowestWeight = childWeight;}
			if (childWeight > highestWeight) { highestWeight = childWeight;}
		}
	}

  // Ad root to vertical Order Hash Map  
  verticalOrderMap[0] = [];
  verticalOrderMap[0].push(root);
	processNodeChildren(root, 0, verticalOrderMap);

	// Print content from vertical Order hash Map which contains vertical traversal order	
	for (var i=lowestWeight; i <= highestWeight; i++) {

		if (verticalOrderMap[i] !== null || verticalOrderMap[i] !== undefined) {
			
		    var displayArr = [];
		    for (var j=0; j<verticalOrderMap[i].length; j++) {
		        displayArr.push(verticalOrderMap[i][j].data);
		    }
      		console.log(displayArr);
		}		
	}	
}

var root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

treeVerticalTraversal(root);
