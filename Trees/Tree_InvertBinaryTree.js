/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

function Node(val) {

	this.value = val;
	this.left = null;
	this.right = null;
}


function InvertBTree(root) {

	// Populate queue with inverted values from source Tree
	var readNodesQueue = [];
	var newTreeNodes = [];
	readNodesQueue.push(root);

	while (readNodesQueue.length > 0) {

		var tempNode = readNodesQueue.shift();		
		readNodesQueue.push(tempNode.right);
		readNodesQueue.push(tempNode.left);
	}


	// Build New Inverted Tree
	var newTreeRoot = new Node(readNodesQueue.shift().value);
	var tempNode = newTreeRoot;
	while (readNodesQueue.length > 0) {

		var tempNode = newTreeNodes.shift();
		tempNode.left = new Node(readNodesQueue.shift().value)
		tempNode.right = new Node(readNodesQueue.shift().value)
		newTreeNodes.push(tempNode.left);
		newTreeNodes.push(tempNode.right);
	}

	return newTreeRoot;
}

function printTreeBFS(root) {

	var tempQueue = [];
	tempQueue.push(root);

	while (tempQueue.length > 0) {

		var tempNode = tempQueue.shift();
		console.log(tempNode.value);
		tempQueue.push(tempNode.left);
		tempQueue.push(tempNode.right);

	}

}

var root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(7);
root1.left.left = new Node(1);
root1.left.right = new Node(3);
root1.right.left = new Node(6);
root1.right.right = new Node(9);

printTreeBFS(root1);

var invertedTreeRoot = InvertBTree(root1);

InvertBTree(invertedTreeRoot);
printTreeBFS(invertedTreeRoot);

