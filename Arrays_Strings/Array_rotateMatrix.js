/*
Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

Example:
  ['A','B','C','D'] 
  ['E','F','G','H'] 
  ['I','J','K','L']
  ['M','N','O','P']

Answer: 
  ['M','I','E','A'] 
  ['N','J','F','B'] 
  ['O','K','G','C']
  ['P','L','H','D']
*/

function rotateMatrix(matrixArray) {

  var m = matrixArray;
  var minIndex = 0;
  var maxIndex = matrixArray.length - 1;

  //var minIndex = 1;
  //var maxIndex = 2;

  while (minIndex <= maxIndex) {

    //console.log("------------------------------------------------");
    //console.log("minIndex:" + minIndex + ", maxIndex:" + maxIndex);
    
      // Copy top row
    var tempArray = [];
    for (var i=minIndex; i<=maxIndex; i++) {
      tempArray.push(matrixArray[minIndex][i]);
    }  
    
    //console.log("top row, tempArray:" + tempArray);
    //console.log(m[0]);
    //console.log(m[1]);
    //console.log(m[2]);
    //console.log(m[3]);
   
      //Copy left column to top
    var backwardsInd = maxIndex;
    for (var i=minIndex; i<=maxIndex; i++) {
      m[minIndex][backwardsInd] = m[i][minIndex];
      backwardsInd--;
    }
    //console.log("After copying left column to top row:");
    //console.log(m[0]);
    //console.log(m[1]);
    //console.log(m[2]);
    //console.log(m[3]);
    
    //Copy bottom row to left column
    for (var i=minIndex; i<=maxIndex; i++) {
      m[i][minIndex] = m[maxIndex][i];
    }
    //console.log("After copying bottom row to left column:");
    //console.log(m[0]);
    //console.log(m[1]);
    //console.log(m[2]);
    //console.log(m[3]);

    //Copy right column to bottom row
    var backwardsInd = maxIndex;
    for (var i=minIndex; i<=maxIndex; i++) {
      m[maxIndex][i] = m[backwardsInd][maxIndex];
      backwardsInd--;
    }
    
    //console.log("Beefore copying top row to right column...tempArray:" + tempArray);

    var ind = 0;
    for (var i=minIndex; i<=maxIndex; i++) {
      m[i][maxIndex] = tempArray[ind];
      ind++;
    }
    //console.log("After copying top row to right column:");
    //console.log(m[0]);
    //console.log(m[1]);
    //console.log(m[2]);
    //console.log(m[3]);
    
    minIndex++;
    maxIndex--;
  }
  return m;
}

var matrixArr = [ ['A','B','C','D'], ['E','F','G','H'], ['I','J','K','L'], ['M','N','O','P'] ];
console.log("Initial matrix:");
console.log(matrixArr[0]);
console.log(matrixArr[1]);
console.log(matrixArr[2]);
console.log(matrixArr[3]);

var rotatedMatrix = rotateMatrix(matrixArr);
console.log("Rotated matrix:");
console.log(rotatedMatrix[0]);
console.log(rotatedMatrix[1]);
console.log(rotatedMatrix[2]);
console.log(rotatedMatrix[3]);



