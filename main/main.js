var fs = require('fs')
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

// watch a directory for new file, 
// then send that new file to watson for 
// facial recognition


var dirname = 'public/camera';

var visual_recognition = new VisualRecognitionV3({
  api_key: 'b18a80ca677541deacaf9cebce5617b7dd2265ed',
  version_date: '2016-05-19'
});




fs.watch(dirname, function(event, filename) {
	console.log('event is: ' + event);
	if (filename) {
		console.log('filename provided: ' + filename);
	} else {
		console.log('filename not provided');
	}
	if (event == "rename") {
		if (filename) {
			console.log('send to watson: ' + filename);
			// wait for 3000 because file change may not be completed
			setTimeout(sendToWatson(dirname + "/" + filename), 5000);
		} 		
	}
});



function sendToWatson(filename) {
	console.log("sendToWatson at " + filename);

	var params = {
	  images_file: fs.createReadStream(filename)
	};

	// visual_recognition.classify(params, function(err, res) {
	//   if (err)
	//     console.log(err);
	//   else
	//     console.log(JSON.stringify(res, null, 2));
	// });
	
	visual_recognition.detectFaces(params,
	  function(err, response) {
	    if (err)
	      console.log(err);
	    else
	      console.log(JSON.stringify(response, null, 2));
	  });


}
