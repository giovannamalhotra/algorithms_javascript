/*  ------------------------------------ */
/*  ---- S E L E C T I O N   S O R T --- */
/*  ------------------------------------ */

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var j;
    var arrayLen = array.length;
    for (j=0;j<arrayLen;j++) {
        var secondIndex = indexOfMinimum(array, j);
        swap(array, j, secondIndex);    
    }    

};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);