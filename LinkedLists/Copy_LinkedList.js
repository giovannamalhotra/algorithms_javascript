/*
Deep copy a linked list, where the node has the next and random pointers.

As an example linked list below, copy it to a new linked list
Root ->   nodeA    ->    nodeB    ->   nodeC   ->   nodeD
         nodeA.random -> nodeC                      nodeD.random -> nodeA
*/

// linkedList structure
var nodeA = {},
    nodeB = {},
    nodeC = {},
    nodeD = {};

nodeD = {
    value: 12,
    next: null,
    random: nodeA
};

nodeC = {
    value: 18,
    next: nodeD,
    random: null
};

nodeB = {
    value: 74,
    next: nodeC,
    random: null
};

nodeA = {
    value: 465,
    next: nodeB,
    random: nodeC
};

nodeD.random = nodeA;


var linkedList = {
    root: nodeA,
    counter: 4
};


function Node(val) {

	this.value = val;
	this.next = null;
	this.random = null;
}

function printLinkedList(root) {

	var current = root;
	while (current !== null) {

		var randomNodeVal = randomMap[current.value];
		current.random = valToNodeMap[randomNodeVal];

		var nextVal = ""
		var randomVal = "";
		if (current.random !== null && typeof current.random !== 'undefined') {randomVal = current.random.value;}

		if (current.next !== null && current.next !== undefined) {nextVal = current.next.value;}

		console.log("Node value:" + current.value + ", node next:" + nextVal + ", node random:" + randomVal);

		current = current.next;
	}
}

var newLinkedList = {
    root: null,
    counter: 0
};

var randomMap = {};
var valToNodeMap = {}

function copyLinkedList(root) {

	var origLinkedListNode = linkedList.root;
	var prevNode = null;

	while (origLinkedListNode !== null) {

		var newNode = new Node(origLinkedListNode.value);
    
    var tempRandomVal = "";
    if (origLinkedListNode.random !== null) { tempRandomVal = origLinkedListNode.random.value; }
    console.log("Node:" + origLinkedListNode.value + ", random:" + tempRandomVal );
		
    if (origLinkedListNode.random !== null) {
			randomMap[newNode.value] = origLinkedListNode.random.value;
		}

		valToNodeMap[newNode.value] = newNode;
		origLinkedListNode = origLinkedListNode.next;

		if (prevNode !== null) {prevNode.next = newNode;}
		else { newLinkedList.root = newNode;}
		
		prevNode = newNode;
		newLinkedList.counter++;

	}
}

console.log("--------------------------");
console.log("nodeD:" + JSON.stringify(nodeD.random.value));

copyLinkedList(linkedList.root);

console.log("--------------------------");
console.log("Print original LinkedList:");
printLinkedList(linkedList.root); 

console.log("--------------------------");
console.log("Print new LinkedList:");
printLinkedList(newLinkedList.root)


console.log("--------------------------");
console.log("Print randomMap:");
console.log(JSON.stringify(randomMap));
