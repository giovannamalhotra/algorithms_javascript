/*
Implement circulating linked list with insert & delete
*/

function Node(val) {
	this.data = val;
	this.next = null;
}

function LinkedList() {

	this.head = null;
	this.tail = null;
	this.insertNode = function(val, node) {

		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
		} else {
			
      // Insert after given node
			var currentNode = this.head;
			while (currentNode !== null) {
				if (currentNode == node) {
					var temp = currentNode;
					currentNode.next = newNode;
					newNode.next = temp.next;
          
          if (node == this.tail) { this.tail = newNode;}
					break;
				}
        
			}
		}
	};	

	this.deleteNode = function(node) {

    if (node == null) { return null;}
    
		var currentNode = this.head;
		var prevNode = this.head;
		while (currentNode !== null) {

			if (currentNode == node) {
				prevNode.next = currentNode.next;
			} else {
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
				
		}
    
	}

}