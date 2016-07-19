/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/


var matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

var target = 23;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var lastCol = matrix[0].length;  //total columns
    
    for (var i=0; i< matrix.length; i++) { //rows
        
        for (var j=0; j<= lastCol; j++) {  //columns
            
          console.log("i:" + i + ", j:" + j + ", lastCol:" + lastCol);
          
            if (matrix[i][j] === target ) {return true;}
            
            if (matrix[i][j] > target ) {
                
                if (lastCol-- < 0 ) { return false;}
                else { lastCol--; break;}
            }
            if (matrix[i][j] < target && j === lastCol ) {
                break;
            }            
        }
    }
    return false;
};

var result  = searchMatrix(matrix, target);
console.log("--------");
console.log( result);