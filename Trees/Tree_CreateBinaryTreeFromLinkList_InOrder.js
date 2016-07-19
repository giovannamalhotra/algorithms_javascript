/*
	Given a link list of elements, create a balanced binary Tree "in order"  
*/

function Node(val) {

	this.value = val;
	this.left = null;
	this.right = null;
}

/* Solution with creating Array */
function createBT(listHead) {  /* return the root of the new Tree */

	// Create array from LinkedList
	var current = listHead;
	var inputArray = [];
	while (current !== null) {

		inputArray.push(current.value);
		current = current.next;
	}

	// Recursively create the tree
	var createTree = function(arr) {

		var middle = Math.round(arr.length/2);
		var root = new Node(arr[middle]);

		if (arr.length)
		root.left = createTree(arr.slice(0, middle));
		root.right = createTree(arr.slice(middle+1));
	}


}


/* Solution without creating array:  traverse LinkedList and create empty tree with just length number 
	Then traverse the linked list, and populate each node while traversing the empty tree "in Order"
*/
