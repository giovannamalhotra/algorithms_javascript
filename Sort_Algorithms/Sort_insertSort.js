/*  ------------------------------------ */
/*  ---- I N S E R T I O N   S O R T --- */
/*  ------------------------------------ */

/* Rate of Growth: c * ( 1 + 2 + ... + [n-1] ) = c * ( [n-1][n]/2 ) = c*n^2/2  - cn/2  = ~ O(n^2) */
/*  Worst case: Θ(n^2)  */
/*	Best case: Θ(n)     */ 

/* Given: 1 + 2 + ... + n : n(n+1)/2  */

/* ------------------------------------- */

var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    
    var i;
    var len = array.length;
    for(i=1;i<len;i++) {
        insert(array, i-1, array[i]);    
    }    

};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log("Array after inserting 2:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
console.log("Array after inserting 9:  " + array);
//Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
console.log("Array after inserting 6:  " + array);
//Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);



var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
