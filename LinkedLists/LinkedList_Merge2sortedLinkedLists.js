/*
Given an integer linked list of which both first half and second half are sorted independently. 
Write a function to merge the two parts to create one single sorted linked list in place [do not use any extra space].

Input: List 1 -> 2 -> 3 -> 4 -> 5   List 2: 1 ->2;   Output: 1 -> 1 -> 2 -> 2 -> 3 -> 4 -> 5;
*/

function printLL(head) {

	var currentNode = head;
	var printStr = "";
	while (currentNode !== null) {
		printStr = printStr + " -> " + currentNode.data;
    currentNode = currentNode.next;
	}
	console.log(printStr);
}

function mergeSortedLinkedLists(head1, head2) {

	var head = head1;
	var pointer1 = head1;
	pointer2 = head2;
	while ( pointer1 !== null && pointer2 !== null) {

    var prev = pointer1; // Update tail to current pointer before pointer is updated
		if (pointer1.data == pointer2.data || (pointer1.next && pointer1.next.data > pointer2.data) ) {

			var temp1 = pointer1.next;
			var temp2 = pointer2.next;
			pointer1.next = pointer2;
			pointer2.next = temp1;

			pointer1 = pointer2;
			pointer2 = temp2;
		} else {
			pointer1 = pointer1.next;
		}
    
 	}

	if (pointer2 !== null) {
		prev.next = pointer2;
	}
	return head;
}


var ll1 = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 5,
      next: { 
        data: 8,
        next: null,
      },
    },  
  },  
};

var ll2 = {
  data: 4,
  next: {
    data: 5,
    next: {
      data: 6,
      next: null,
    },  
  },  
};

/*
var ll3 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },  
  },  
};

var ll4 = {
  data: 4,
  next: {
    data: 5,
    next: {
      data: 6,
      next: null,
    },  
  },  
};
*/
printLL(ll1);
printLL(ll2);
var mergedLL = mergeSortedLinkedLists(ll1, ll2);
printLL(mergedLL);

