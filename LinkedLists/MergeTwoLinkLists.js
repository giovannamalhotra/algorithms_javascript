/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function node() {
    this.value = "";
    this.next = null;
}

function mergedLinkList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    this.add = function(val) {
        var newNode = new node();
        newNode.val = val
        newNode.next = null;
      
        if (this.tail == null) {
          this.head = newNode;
          this.tail = newNode;
        }  
      
        var temptail = this.tail;
        temptail.next = newNode; 
        this.tail = newNode;
      
        this.length = this.length + 1;
    }
}

var mergeKLists = function(lists) {
    // list[1] --> first linked List
    // List[2] --> second linked list

    var currentListNode1 = Lists[1].head;
    var currentListNode2 = Lists[2].head;

    while (currentListNode1 != null && currentListNode2 !== null) {

        if ( currentListNode1.val < currentListNode2.val ) {
            mergedLinkList.add(Lists[1].head.val);
            currentListNode1 = currentListNode1.next;
        } else {
            mergedLinkList.add(Lists[2].head.val);
            currentListNode2 = currentListNode2.next;
        }
    }

};