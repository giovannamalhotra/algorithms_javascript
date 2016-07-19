var write = function(string) {
  //document.write(string);
  console.log(string);
}

var i = 0;

var hanoi = function(disc,src,aux,dst) {
    if (disc > 0) {
    hanoi(disc - 1,src,dst,aux); // Moves discs - 1 to aux
    write("Move disc " + disc + " from " + src + " to " + dst + "<br />"); //Moves the bottom disc to dst
    hanoi(disc - 1,aux,src,dst); // moves the previous discs back to dst
    }
};

hanoi(3,"src","aux","dst");