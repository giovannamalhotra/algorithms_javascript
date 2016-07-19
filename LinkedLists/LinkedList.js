
function node() {
		this.value = '';
		this.next = null
	}



function LinkedList() {
	
	this.head = null;
	this.tail = null; 
	this.length = 0;

	this.add = function(valueParam) {

		var newNode = new node();
		newNode.value = valueParam;
		newNode.next = null;


		if ( this.tail == null) {

			this.head = newNode;
			this.tail = newNode;

		} else {
			var tempTail = this.tail;
			tempTail.next = newNode;
			this.tail = newNode;
		}

		this.length = this.length + 1;

	}


	this.remove = function(valueToRemove) {

		var tempNode = this.head;
		var previousNode = this.head;


		while (tempNode !== null) {

			if (tempNode.value === valueToRemove) {

				if (tempNode = this.head) {
					this.head = tempNode.next;

				} else {
					previousNode.next = tempNode.next;
				}

				this.length = this.length - 1;

				break;
			} else {

				previousNode = tempNode;
				tempNode = tempNode.next; 

			}

		}
	}

	this.find = function(valueToFind) {

		var tempNode = this.head;

		while (tempNode.next !== null) {

			if (tempNode.value === valueToFind) {

				return tempNode;

			} else {

				tempNode = tempNode.next; 

			}

		}

	}



}