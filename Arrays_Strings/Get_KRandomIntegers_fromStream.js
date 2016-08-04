/*
Create list of K random sample from a stream of integers

--- this is a typical RESERVOIR SAMPLING Exercise -----

*/

function RandomSample(k) {
	
	var sampleArray = []; 

	this.getRandomSample = function() {
		return 	sampleArray;	
	};

  var count = 0;
	while ( count < 1000) {

    count++;
		// Get random integer
		var newInt = Math.floor(Math.random() * (1000 + 1));

		if (sampleArray.length < k) {
			sampleArray.push(newInt);
		} else {

			// Decide if new number should be inserted or not
			if ( Math.round(Math.random()) === 0 ) { // do nothing, ignore number} 
      } else {

				var indx = Math.floor(Math.random() * (k - 0 + 1)) + 0;
				sampleArray[indx] = newInt;	
			}	
		}
	}
}


var randomSampleObj = new RandomSample(4);

for (var i=0; i<6; i++) {
  
   console.log( randomSampleObj.getRandomSample() );
}  