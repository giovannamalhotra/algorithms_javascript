/*
Imagine you have a constant flow of integers (one integer per second), at any specific time, 
your boss can come in and ask you for 500 numbers. Each number from the stream should have 
a same probability of getting selected as one of the 500 numbers. Condition - do not store the stream.
*/
//var selectedNumbers = new Array( 500 );

var selectedNumbers = new Array();
//var selectedNumbers= Array.apply(null, new Array(500)).map(function(_,i) { return i; }) 

var totalToSelect = 500;

function selectANumber( num ) {
  selectedNumbers.push(num);
  //console.log("selectedNumbers:" + selectedNumbers);
  if(selectedNumbers.length > totalToSelect){
    console.log("will remove one");
    selectedNumbers.splice(Math.floor(Math.random()*selectedNumbers.length),1);
  }
}

selectANumber(0);
selectANumber(-1);
selectANumber(4);
selectANumber(100);
selectANumber(-50);
selectANumber(10);
selectANumber(5);
console.log("selectedNumbers:" + selectedNumbers);

