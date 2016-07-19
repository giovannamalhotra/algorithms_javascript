/*
4 15 16 50 8 23 42 108
4 8 15 16 23 42 50 108
*/

function merge( array1, array2) {
 
  var mergedArray = [];
  
  var index1 = 0;
  var index2 = 0;
 
  while (index1 <= array1.length && index2 <= array2.length) {
 
      if ( Number(array1[index1]) < Number(array2[index2]) ) {
       
        mergedArray.push(array1[index1]);
        index1++;                 
        
      } else {
        mergedArray.push(array2[index2]);
        index2++;                 
      }
      //console.log("Inside merge... mergedArray:" + mergedArray + ", index1:" + index1 + ", index2:" + index2);    
  }                    
                       
    if (index1 < array1.length) { 
    
        for (var i=index1; i<array1.length; i++) {
        
          mergedArray.push(array1[i]);
        }  
    }    

    if (index2 < array2.length) { 
    
        for (var i=index2; i<array2.length; i++) {
        
          mergedArray.push(array2[i]);
        }  
        
    }    
                           
  return mergedArray;

}


function mergeSort(inputArray) {
  
  
  if (inputArray.length < 2) {return inputArray;}

  else {
    
    var halfIndex = Math.round(inputArray.length/2);
    
    var array1 = mergeSort(inputArray.slice(0,halfIndex));
    var array2 = mergeSort(inputArray.slice(halfIndex, inputArray.length));  
    console.log("--------------------");
    console.log("array1:" + array1);
    console.log("array2:" + array2);
    console.log("merged array:" + merge(array1, array2) ); 
    console.log("--------------------");
    return merge(array1, array2);  
  
  }    
  
}


var sampleArray = "4 15 16 50 8 23 42 108".split(" ");
//console.log("sampleArray:" + sampleArray);

console.log("Sorted array:" + mergeSort(sampleArray) );
