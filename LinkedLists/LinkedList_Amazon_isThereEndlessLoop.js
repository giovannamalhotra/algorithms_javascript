// abcd

function reverse(str) {


    var result = "";
    for (var i=str.length-1; i>=0; i--) {
    
        result = result + str.chartAt(i);
    
    }
    return result;

}


function node(val) {

    this.val = val;
    this.next = null;

}


function linkedList() {

    this.head = null;
    this.tail = null;
    this.len = 0;
    
    this.add = function (val) {
 
        var newNode = new node(val);
    
        if (head == null) {
            head = newNode;
            tail = newNode;
            length++;
 
        } else {
    
            var tempTail = this.tail;
            tempTail.next = newNode;
            this.tail = newNode;
        }
    }    

}
    
function isLoopThere(head) {

    var currentNode = head;
    while ( currentNode.next !== null ) {
    
        prevNode = currentNode;
        if (prevNode === currentNode.next) { return true; }
        currentNode = currentNode.next;
    }
    return false;
)    
    

var head = node(5);
head.next = node(6);
head.next.next = node(7);
head.next.next.next = head.next;

head->5->6->7->6->7->6->....