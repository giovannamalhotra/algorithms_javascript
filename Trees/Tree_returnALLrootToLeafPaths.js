/*
	Given a binary tree, return all root-to-leaf paths.

    For example, given the following binary tree:

      1
    /   \
    2     3
    \
    5
    All root-to-leaf paths are:

    ["1->2->5", "1->3"]

*/

function Node(val) {
  this.data = val;
  this.left = null;
  this.right = null;
}  

function getALLRootToLeafPaths(root) {

	var pathsArray = [];

	var processChildren = function(nodeObj, nodesArray) {

    var rightArray= nodesArray.slice();
		if (!nodeObj.left && !nodeObj.right) {
			
      // Add nodesArray to pathsArray
			pathsArray.push(nodesArray);
		} else {

			if (nodeObj.left) {
        var leftArray = nodesArray.slice();
				leftArray.push(nodeObj.left);
				processChildren(nodeObj.left, leftArray);
			}

			if (nodeObj.right) {
        var rightArray = nodesArray.slice();
				rightArray.push(nodeObj.right);
				processChildren(nodeObj.right, rightArray);
			}
		}
	}

	var initialArray = [root];
	processChildren(root, initialArray);

	for (var i=0; i < pathsArray.length; i++) {

		var printArr = [];
		for (var j=0; j < pathsArray[i].length; j++) {
			printArr.push( pathsArray[i][j].data );
		}
		console.log(printArr);
	}
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);

getALLRootToLeafPaths(root);
