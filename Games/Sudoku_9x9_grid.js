	/*
Sudoku 9x9 grid

Develop a program that validates if a 9x9 grid complies with the following rules:

Rows must contain numbers 1-9. No repeats.
Columns must contain numbers 1-9. No repeats.
3x3 subgrids must contain numbers 1-9. No repeats.


123,	456,	789
123,	456,	789
123,	456,	789

123,	456,	789
123,	456,	789
123,	456,	789

123,	456,	789
123,	456,	789
123,	456,	789

*/


array = [][];
populateArray();

var i;
var j;
var rowStr;
var subgrid= [];
var col= [];
var row =[];

function existsInRow(value, rowIndex) {
	var str = row[rowIndex];
	if ( str.indexOf(value) ) {
		return true;
	} else {
		return false;
		}
}

function existsInCol(value, colIndex) {
	var str = row[colIndex];
	if ( str.indexOf(value) ) {
		return true;
	} else {
		return false;
	}
}

function existsInSubgrid (value, rowIndex, colIndex) {
	// Check subgrid 1
	if (rowIndex <=2 && colIndex <= 2) {
			
		var str = subgrid[0];
		if ( str.indexOf(value) ) {
			return true;
		} else {
			return false;
		}
	}

	// CHeck subgrid 2
	if (rowIndex >=3 && rowIndex <=6 &&  colIndex <= 2) {
		
		var str = subgrid[1];
		if ( str.indexOf(value) ) {
				return true;
		} else {
			return false;
		}
	}

	// Check subgrid 3
	if (rowIndex >=7 && rowIndex <=9 &&  colIndex <= 2) {
		
		var str = subgrid[2];
		if ( str.indexOf(value) ) {
				return true;
		} else {
			return false;
		}
	}

	// Check subgrid 4
	if (rowIndex <=2 &&  colIndex >=3 && colIndex <=6) {
		
		var str = subgrid[2];
			if ( str.indexOf(value) ) {
				return true;
		} else {
			return false;
		}
	}

}



For (i=0; i<8; i++) {

	var row[i] = “”;
	for (j=0; j<8; j++) {


		// check row		
		if ( existsInRow(array[i][j], i) ) {
			return false;
		} else {
			row[i] = row[i] + array[i][j];
		}

		// check column
		if ( existsInCol( array[i][j], j) {
			return false;
		} else {
			col[j] = col[j] + array[i][j];
		}

//check if exists in subgrid
		if ( existsInSubgrid( array[i][j] , i, j) {
			return false;
		} else {
			addvalueinSubgrid( array[i][j] , i, j);
		}

	}
}
