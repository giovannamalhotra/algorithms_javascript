var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];



function isThereRoute(vertex1, vertex2) {
  
  var vertexInfo = [];
  
  for (var i=0; i<adjList.length;i++) {
  
    vertexInfo[i] = { visited: false };
    
  }  

  var vQueue = [];
  vQueue.push(vertex1);
  vertexInfo[vertex1].visited = true;

  
  while ( vQueue.length > 0) {
    
    var vertex = vQueue.shift();
    console.log("Queue:" + vQueue + ", dequeued vertex:" + vertex);
    
    for (var i=0; i<adjList[vertex].length; i++) {

      console.log("Adjacent vertex:" + adjList[vertex][i]);
      if (adjList[vertex][i] === vertex2) {

        return true;

      } else {
      
        if (!vertexInfo[adjList[vertex][i]].visited) {
          vQueue.push(adjList[vertex][i]);
          vertexInfo[adjList[vertex][i]].visited = true;
        }
      }  

    }  
  }
    
  return false;  
  
}


var node1 = 0;
var node2 = 7;
var result = isThereRoute(node1,node2);
console.log("Route between " + node1 + " and " + node2 + " is:" + result);

  