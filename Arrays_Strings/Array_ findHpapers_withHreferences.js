/*
	Array:  5, 0, 3, 1, 6  --> means there are 5 papers: 
								1st paper: has 5 references
								2nd paper: has 0 references
								3rd paper: has 3 references
								4th paper: has 1 reference
								5th paper: has 6 references	

	Return h papers that have at least h references

Examples: 
	Array:  5, 0, 3, 1, 6	
	Sorted: 6, 5, 3, 1, 0
	Result: 3   ==> the index + 1 "3" value is less than the value in the array

	Array:  5, 0, 3, 1, 6, 4, 4	
	Sorted: 6, 5, 3, 4, 4, 1, 0
	Result: 4

	Array: 7
	Sorted: 7
	Result 1  ==> the index + 1: "1" is less or equal than the corresponding value

*/


