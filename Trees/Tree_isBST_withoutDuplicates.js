/*
Determine if a tree is a valid BST with no duplicated values. 
(This means that if the binary tree has a duplicated number it should return "invalid" even if it's an actual BST) 
*/

function isBST(root) {

	var validBST = function(node, min, max) {

		if (node === null) return true;

		if (node.left && node.left.data >= node.data) {return false;}
		if (node.right && node.right.data <= node.data) {return false;}

		if (min !== null && node.data <= min) { return false;}
		if (max !== null && node.data >= max) { return false;}

		if ( !validBST(node.left, min, node.data) ) {return false;}
		if ( !validBST(node.right, node.data, max) ) {return false;}

		return true;
	}
	return validBST(root.left, null, root.data) && validBST(root.right, root.data, null);
}

/* Valid tree */
var root = {
	data: 10,
	left: {
		data: 4,
		left: {
			data: 2,
			left: null, 
			right: null,
		},
		right: {
			data: 8,
			left: {
				data: 7,
				left: null,
				right: null,
			},
			right: {
				data: 9,
				left: null,
				right: null,
			},
		},
	},
	right: {
		data: 15,
		left: {
			data: 11,
			left: null,
			right: null,
		},
		right: {
			data: 16,
			left: null,
			right: null,
		}
	}
}

console.log( isBST(root) ); // Should be "true"


/* Invalid tree */
var root = {
	data: 10,
	left: {
		data: 4,
		left: {
			data: 2,
			left: null, 
			right: null,
		},
		right: {
			data: 4,
			left: {
				data: 7,
				left: null,
				right: null,
			},
			right: {
				data: 9,
				left: null,
				right: null,
			},
		},
	},
	right: {
		data: 15,
		left: {
			data: 11,
			left: null,
			right: null,
		},
		right: {
			data: 16,
			left: null,
			right: null,
		}
	}
}

console.log( isBST(root) ); // Should be false
