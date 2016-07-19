/* Test if 2 trees are the same */
function Node(val) {

	this.value = val;
	this.left = null;
	this.right = null;

}

function areTreesSame(node1, node2) {
	
	if (node1 === null && node2 === null) { return true}

	else {

		if (node1 === null || node2 === null) { return false}
		else {

			if (node1.value === node2.value) {
				return areTreesSame(node1.left, node2.left) && areTreesSame(node1.right, node2.right);
			} else {
				return false;
			}
		}	

	}		
}


var root1  =new Node(10);
root1.left = new Node(5);
root1.right = new Node(15);

var root2  =new Node(10);
root2.left = new Node(5);
root2.right = new Node(15);

console.log("Are first trees the same:" + areTreesSame(root1, root2));


var root1  =new Node(10);
root1.left = new Node(2);
root1.right = new Node(12);

var root2  =new Node(10);
root2.left = new Node(5);
root2.right = new Node(15);

console.log("Are second trees the same:" + areTreesSame(root1, root2));