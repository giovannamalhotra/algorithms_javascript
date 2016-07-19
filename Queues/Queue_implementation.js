function Queue(size) {
  
  this.queue = [];
  this.maxSize = size;
  
  
  this enqueue = function(val) {
    
    this.enqueue.push(val);
    
  };

  
  this.dequeue = function() {
    
    var elem = this.queue[0];
    this.queue.shift();
    return elem;
    
  }
  
}
