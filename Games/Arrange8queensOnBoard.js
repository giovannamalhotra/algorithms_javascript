function Board(size) {
  
  this.size = size;
  this.result = [];
  
  var isPosValid = function(row, col, posArray) {

    // Check if new position will conflict with positions in previous rows
    for (var prevRow=0; prevRow<row; prevRow++) {

      //console.log("prevRow:" + prevRow + ", posArray[prevRow]:" + posArray[prevRow]);
      if (posArray[prevRow] === col) {
       
        return false; //prevRow has a queen in same column
      }  

      if (Math.abs(Number(row) - prevRow) === Math.abs(Number(col) - posArray[prevRow]) ) {
       
        return false; //prev row has a queen in diagonal
      } 
      
    } 
    
    return true;
    
  };
  
  
  this.placeQueens = function(row, posArray) {
    
    console.log("this.size:" + this.size + ", row:" + row + ", posArray:" + posArray);
    
    if (Number(row) === Number(this.size) ) {
     
      console.log("Finished checking all subsequent rows...");
      var tempArray = posArray.slice(0);
      this.result.push(tempArray);
      posArray = [];

    } else {  

      var placed= false;
      for (var j=0; j<this.size; j++) {

        console.log("row:" + row + ", col:" + j + ", isPosValid():" +  isPosValid(row, j, posArray) + ", posArray:" + posArray);
        if (isPosValid(row, j, posArray)) {

            //posArray[row] = j;
            posArray.push(j);
            placed = true;
            this.placeQueens(Number(row) + 1, posArray);
        }    

      }
      if (!placed) {
 
        var tempArray = posArray.slice(0);
        this.result.push(tempArray);
        posArray = [];
      
      }
      
    }
    
  };

  
  this.printAllPossibilities = function() {
  
    var initialPosArray = [];

    this.placeQueens(0, initialPosArray);

    
    console.log("------------------------------");
    for (var i=0; i< this.result.length; i++) {
      for (var j=0; j<this.size; j++) {
      
        console.log("result " + Number(i+1) + ", row " + j + ", col:" + this.result[i][j]);
      }
    }  
    console.log("------------------------------");
    
  }
   
}  

var board1 = new Board(3);
board1.printAllPossibilities();

