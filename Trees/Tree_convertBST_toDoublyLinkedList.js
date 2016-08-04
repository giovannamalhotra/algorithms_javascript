/*
Convert Binary search tree to ordered doubly linked list in place (do not use additional data structure). You can use additional variables to keep track of some states.

// Binary search tree
// //      48
// //   24   53 
// //  12 34 50 60

// doubly linked list
// // 12<--> 24 <-->34 <--> 48 <-->  50<--> 53 <-->60
*/

function LinkedListNode(val) {

	this.data = val;
	this.next = null;
	this.parent = null;
}

function printLinkedList(head) {

	var currentLLNode = head;
	var str = "";
	while (currentLLNode !== null) {
		str = str + currentLLNode.data + " -> ";
		currentLLNode = currentLLNode.next;
	}
	console.log(str);
}


function convertBSTtoLinkedList(root) {

	this.llHead = null;
	this.llTail = null;

	var addNodeToLinkedList = function(node) {

		if (this.llHead == null) {
			this.llHead = node;
			this.llTail = node;
		} else {
			var newLLNode = new LinkedListNode(node.data);
			var tempNode = this.llTail;
			tempNode.next = newLLNode;
			newLLNode.parent = tempNode;
			this.llTail = newLLNode;
		}
	}


	var traverseTreeNode = function(treeNode) {

		if (treeNode === null) { return null;}
		traverseTreeNode(treeNode.left);
		addNodeToLinkedList(treeNode);
		traverseTreeNode(treeNode.right);
	}

	traverseTreeNode(root);
	return this.llHead;
}

var tree = {
    data: 48,
    left: {
        data: 24,
        left: {
            data: 12,
            left: null,
            right: null,
        },
        right: {
            data: 34,
            left: null,
            right: null,
        },
    },
    right:{
        data: 53,
        left:{
        
            data: 50,
            left: null,
            right: null,
        },
        right:{
            data: 60,
            left: null,
            right: null,    
        },
    }
}

var treeHead = convertBSTtoLinkedList(tree);
printLinkedList(treeHead);

